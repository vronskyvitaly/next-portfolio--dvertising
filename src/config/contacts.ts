import { siteConfig } from './site.config'

/**
 * Публичные контакты, которые выводятся в интерфейсе и в JSON-LD.
 *
 * Телефон берётся из siteConfig, чтобы не разъезжался с юридическими документами.
 * Публичный e-mail отличается от юридического (siteConfig.contacts.email):
 * рабочая переписка идёт через mail.ru, он же используется в SMTP-транспорте.
 */

const phoneDigits = siteConfig.contacts.phone.replace(/[^\d+]/g, '')

export const contacts = {
  phone: siteConfig.contacts.phone,
  phoneHref: `tel:${phoneDigits}`,
  email: 'vronskyvitaly@mail.ru',
  emailHref: 'mailto:vronskyvitaly@mail.ru',
  telegram: 'https://t.me/vitalyvronsky',
  telegramHandle: '@vitalyvronsky',
  portfolio: 'https://vronskyvitaly.ru'
} as const

export const SITE_URL = siteConfig.site.url
