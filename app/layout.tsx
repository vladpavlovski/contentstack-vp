import React from 'react'
import type { Metadata } from 'next'
import '../styles/globals.css'
import Header from '@/components/header/header'
import { Footer } from '@/components/footer/Footer'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'Rapid7',
  description: 'Rapid7 Website',
  applicationName: 'Rapid7-Website',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body className={`antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='light' disableTransitionOnChange enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
