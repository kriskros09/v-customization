import { getColorModeInitScriptElement } from '@xstyled/styled-components'
import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(context) {
    const initialProperties = await Document.getInitialProps(context)
    return { ...initialProperties }
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="/fonts/gotham/fonts.css" rel="stylesheet" />
          <link href="/fonts/trimposter/fonts.css" rel="stylesheet" />
        </Head>
        <body>
          {getColorModeInitScriptElement()}
          <Main />
          <div id="modal-portal" />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
