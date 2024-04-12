import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" href="../public/favicon.ico"></link>
                <link rel="stylesheet" href="https://static.octopuscdn.com/fonts/Gotham/fonts.min.css"></link>
            </Head>
            <body>
                <div id='root'>
                    <Main />
                    <NextScript />
                </div>
            </body>
        </Html>
    )
}
