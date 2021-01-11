import Head from 'next/head'
import '../styles/globals.css'
import '../styles/fonts/trap/trap.css'
import '../styles/useState.css'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>React Hooks</title>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
