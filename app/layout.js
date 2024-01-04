import { Inter } from 'next/font/google'
import './globals.css'
import * as React from "react";
import {Providers} from "./providers";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Celeste's Portfolio",
  description: "Celeste's Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}><Providers>{children}</Providers></body>
    </html>

  )
}



