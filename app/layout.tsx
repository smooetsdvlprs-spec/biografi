import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Erlin Veronica — Biografi Personal',
  description: 'Mengenal Erlin Veronica, perjalanan, perspektif, karya, dan ruang kolaborasinya.',
  openGraph: {
    title: 'Erlin Veronica — Biografi Personal',
    description: 'Merangkai ide, membuka kemungkinan.',
    type: 'website',
    images: [{ url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-STpXWrCVegbMREk8CkK0Xxxo8S0Na0.png' }],
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      }
    ],
    apple: '/icon.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
