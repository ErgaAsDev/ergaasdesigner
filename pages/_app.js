import '../styles/globals.css'
import { Nunito } from '@next/font/google'
import { Main } from 'next/document'
import Script from 'next/script'

const nunito = Nunito()

function MyApp({ Component, pageProps }) {
  return (
  <main className={nunito.className}>
    <Component {...pageProps} />
  </main>
  )
}

export default MyApp
