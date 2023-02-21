import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import React from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <React.StrictMode>
      <Component {...pageProps} />
    // </React.StrictMode>
  )
}
