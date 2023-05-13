import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en-US" dir="ltr">
      <Head>
        <link rel="shortcut icon" href='/favicon.jpg'/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
