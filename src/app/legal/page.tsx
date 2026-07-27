import type { Metadata } from 'next'
import { LegalBackLink } from '@/components/legal/LegalBackLink'
import { LegalIndexHeader } from '@/components/legal/LegalIndexHeader'
import { LegalDocList } from '@/components/legal/LegalDocList'

export const metadata: Metadata = {
  title: 'Юридические документы — Виталий Вронский',
  description:
    'Политика конфиденциальности, согласие на обработку персональных данных, политика cookie и пользовательское соглашение.',
  alternates: { canonical: '/legal' }
}

export default function LegalIndexPage() {
  return (
    <main className='min-h-screen bg-[#0a0a0a] text-white'>
      <div className='max-w-3xl mx-auto px-6 py-16 sm:py-24'>
        <LegalBackLink />
        <LegalIndexHeader />
        <LegalDocList />
      </div>
    </main>
  )
}
