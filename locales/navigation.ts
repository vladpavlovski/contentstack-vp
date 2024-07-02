import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import { i18n } from '@/locales/i18n-config'
export const localePrefix = 'as-needed'

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales: i18n.locales,
  localePrefix,
})
