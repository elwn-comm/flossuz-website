import { type Metadata } from 'next'

import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: "%s - Floss O'zbekiston",
    default:
      "Floss O'zbekiston - O'zbekistondagi yagona IT hamjamiyat aggregatori.",
  },
}

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export default function Layout({ params, children }: Props) {
  const { locale } = params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang={locale} className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider>
          <RootLayout>{children}</RootLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
