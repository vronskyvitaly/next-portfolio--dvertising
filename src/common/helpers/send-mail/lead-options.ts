const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

export interface LeadPayload {
  name: string
  contact: string
  task: string
  source: string
}

export const leadOptions = (lead: LeadPayload, leadId: unknown) => {
  const rows: [string, string][] = [
    ['Имя', lead.name],
    ['Связь', lead.contact],
    ['Задача', lead.task],
    ['Страница', lead.source]
  ]

  const rowsHtml = rows
    .map(([label, value]) => {
      const safe = value.trim()
      return `
        <tr>
          <td style="padding:10px 16px;color:#666;font-size:13px;vertical-align:top;width:32%;border-bottom:1px solid rgba(255,255,255,0.04)">${label}</td>
          <td style="padding:10px 16px;font-size:13px;border-bottom:1px solid rgba(255,255,255,0.04);${safe ? 'color:#e0e0e0' : 'color:#444;font-style:italic'}">${safe ? escapeHtml(safe).replace(/\n/g, '<br/>') : 'не указано'}</td>
        </tr>`
    })
    .join('')

  const currentDate = new Date().toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  const html = `<!DOCTYPE html>
<html>
<body style="background:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;margin:0;padding:32px 16px">
  <div style="max-width:620px;margin:0 auto">
    <div style="background:linear-gradient(135deg,#7d2cc8,#0070f3);border-radius:16px;padding:28px 32px;margin-bottom:20px">
      <p style="color:rgba(255,255,255,0.6);font-size:12px;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px">Новая заявка</p>
      <h1 style="color:white;margin:0 0 4px;font-size:22px;font-weight:600">${escapeHtml(lead.name)}</h1>
      <p style="color:rgba(255,255,255,0.75);margin:0;font-size:15px">${escapeHtml(lead.contact)}</p>
    </div>
    <div style="background:#111;border-radius:16px;border:1px solid rgba(255,255,255,0.06);overflow:hidden">
      <table style="width:100%;border-collapse:collapse">
        ${rowsHtml}
      </table>
    </div>
    <p style="color:#333;font-size:12px;text-align:center;margin-top:24px">
      Заявка #${leadId} · ${currentDate}
    </p>
  </div>
</body>
</html>`

  return {
    from: `"Заявка с сайта" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER as string,
    subject: `Заявка: ${lead.name} — ${lead.contact}`,
    html
  }
}
