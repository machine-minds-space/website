import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  // Get the full URL of the logo in the public folder
  const logoUrl = `${window.location.origin}/logo.png`;
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta
          name="description"
          content="Discover the AI revolution with Machine Minds! Connect with fellow AI enthusiasts, visionaries, and industry experts in our inclusive meetup group. Dive into AI's transformative impact on tech, society, and businesses of all sizes. Join now, make friends, gain insights, and shape a smarter future together!"
        />
        <meta property="og:title" content="Machine Minds" />
        <meta
          property="og:description"
          content="Discover the AI revolution with Machine Minds! Connect with fellow AI enthusiasts, visionaries, and industry experts in our inclusive meetup group. Dive into AI's transformative impact on tech, society, and businesses of all sizes. Join now, make friends, gain insights, and shape a smarter future together!"
        />
        <meta property="og:image" content={logoUrl} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
