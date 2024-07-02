'use client'
import { Check, ChevronDown, Globe } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { useLocale, useTranslations } from 'next-intl'

import { i18n, type Locale } from '@/locales/i18n-config'
import { Link, usePathname } from '@/locales/navigation'

export const LanguageSwitcher = () => {
  const locale = useLocale()
  const t = useTranslations('LanguageSwitcher')
  const pathName = usePathname()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='flex items-center gap-2'>
          <Globe className='h-4 w-4' />
          <span>{t(locale)}</span>
          <ChevronDown className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-40'>
        <DropdownMenuLabel>{t('title')}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {i18n.locales.map((locale: Locale) => (
          <DropdownMenuItem key={locale} asChild>
            <Link locale={locale} href={pathName}>
              <div className='flex items-center justify-between'>
                <span>{t(locale)}</span>
                <Check className='invisible h-4 w-4' />
              </div>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
