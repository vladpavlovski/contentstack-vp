import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'de', 'ja'],
} as const

export type Locale = (typeof i18n)['locales'][number]

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!i18n.locales.includes(locale as Locale)) notFound()

  return {
    messages: (await import(`./dictionaries/${locale}.json`)).default,
  }
})
