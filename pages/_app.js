import Banner from '../components/banner'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Banner />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
