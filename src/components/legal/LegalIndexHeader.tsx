import { siteConfig } from '@/config/site.config'

export function LegalIndexHeader() {
  return (
    <header className='mb-12'>
      <p className='text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-mono'>
        Правовая информация
      </p>
      <h1 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
        Юридические документы
      </h1>
      <p className='text-gray-400'>
        Документы сайта{' '}
        <a
          href={siteConfig.site.url}
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-300 hover:text-white transition-colors underline underline-offset-2'
        >
          {siteConfig.site.domain}
        </a>
        , регулирующие обработку персональных данных и условия использования сайта.
      </p>
    </header>
  )
}
