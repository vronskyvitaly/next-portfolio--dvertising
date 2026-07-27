import { siteConfig } from '@/config/site.config'
import { getLegalDocuments } from '@/lib/legal/registry'
import { LegalDocCard } from './LegalDocCard'

export function LegalDocList() {
  const documents = getLegalDocuments(siteConfig)

  return (
    <ul className='space-y-4'>
      {documents.map(doc => (
        <LegalDocCard
          key={doc.slug}
          doc={doc}
          revision={siteConfig.revisions[doc.slug]}
        />
      ))}
    </ul>
  )
}
