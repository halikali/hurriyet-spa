import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="tr">
        <Head>
          <meta charset="UTF-8" />
          <meta name="description" content="Hürriyet - Haber, Son dakika haberler, Güncel gazete haberleri" />
          <meta name="keywords" content="HTML, CSS, JavaScript" />
          <meta name="author" content="Ali Tunç" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
