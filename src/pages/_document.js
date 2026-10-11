import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props) {
  const locale = props.__NEXT_DATA__?.locale || "fa";

  return (
    <Html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"}>
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
