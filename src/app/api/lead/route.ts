import { NextRequest, NextResponse } from 'next/server'
import { db, ensureLeadsTable } from '@/lib/db'
import { transporter, leadOptions, type LeadPayload } from '@/common/helpers/send-mail'

const MAX_LENGTH = { name: 120, contact: 200, task: 4000, source: 200 }

function clean(value: unknown, limit: number): string {
  return typeof value === 'string' ? value.trim().slice(0, limit) : ''
}

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid json' }, { status: 400 })
  }

  const raw = body as Record<string, unknown>
  const lead: LeadPayload = {
    name: clean(raw.name, MAX_LENGTH.name),
    contact: clean(raw.contact, MAX_LENGTH.contact),
    task: clean(raw.task, MAX_LENGTH.task),
    source: clean(raw.source, MAX_LENGTH.source)
  }

  if (!lead.name || !lead.contact) {
    return NextResponse.json(
      { error: 'Заполните имя и способ связи' },
      { status: 400 }
    )
  }

  await ensureLeadsTable()

  const { rows } = await db.query(
    'INSERT INTO leads (name, contact, task, source) VALUES ($1, $2, $3, $4) RETURNING id',
    [lead.name, lead.contact, lead.task, lead.source]
  )
  const leadId = rows[0]?.id

  // Письмо уходит в фоне — заявка уже сохранена, клиента не задерживаем
  sendLeadEmail(lead, leadId).catch(err =>
    console.error('[lead] email error:', err)
  )

  return NextResponse.json({ ok: true })
}

async function sendLeadEmail(lead: LeadPayload, leadId: unknown) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.warn('[lead] EMAIL_USER or EMAIL_PASSWORD not set, skipping email')
    return
  }

  await transporter().sendMail(leadOptions(lead, leadId))
  console.log('[lead] email sent for lead', leadId)
}
