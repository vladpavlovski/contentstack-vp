import React from 'react'
import { NextIntlClientProvider } from 'next-intl'

import type { Metadata } from 'next'
import '@/styles/globals.css'
import Header from '@/components/header/header'
import { Footer } from '@/components/footer/Footer'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { Locale, i18n } from '@/locales/i18n-config'
import { getMessages, unstable_setRequestLocale } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Rapid7',
  description: 'Rapid7 Website',
  applicationName: 'Rapid7-Website',
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale: locale }))
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: Locale }
}>) {
  unstable_setRequestLocale(locale)
  // Providing all messages to the client
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body className={`antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='light' disableTransitionOnChange enableSystem>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
