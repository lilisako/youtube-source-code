import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
