import './globals.css'
import { Inter } from 'next/font/google'
import "../public/style/boxicons/boxicons-2.1.4/boxicons.min.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dororo',
  description: 'Dororo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
