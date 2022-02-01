import Document, { Html, Head, Main, NextScript } from "next/document";
// Usage of this component that we can add lang to our HTML or add portals
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <div id="portal" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
