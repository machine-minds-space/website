import { Html, Head, Main, NextScript } from 'next/document'
import Fathom from "../components/Fathom"


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <script src="https://cdn.usefathom.com/script.js" data-site="ZGWVOOID" defer></script>
      </Head>
      <body>
        <Fathom />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
