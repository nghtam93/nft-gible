import React, { useState, useEffect } from "react";
import "../public/fonts/remixicon.css";
import "../public/css/bootstrap.min.css";
import "../public/css/style.css";
import "../public/css/responsive.css";
import "../public/css/_cutImage.css";


import Head from "next/head";
import GoTop from "../components/Shared/GoTop";
import Loader from "../components/Shared/Loader";
import Wallet from '../components/Modal/Wallet'

import App from 'next/app';
import { Provider } from 'react-redux';
import withRedux from "next-redux-wrapper";

import store from '../redux/store'
class MyApp extends App {
	// static async getInitialProps({Component, ctx}) {
	// 	const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

	// 	//Anything returned here can be accessed by the client
	// 	return {pageProps: pageProps};
	// }

	render() {
		// const [loading, setLoading] = useState(true);
		// useEffect(() => {
		// 	setTimeout(() => setLoading(false), 2000);
		// }, []);
		const loading = false
		const {Component, pageProps, store} = this.props;
		console.log(store)
		return (
			<Provider store={store}>
				<Head>
					<title>Meta NFT Marketplace Template</title>
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
					/>
				</Head>

				<Component {...pageProps} />

				{/* Preloader */}
				<Loader loading={loading} />

				{/* go top */}
				<GoTop scrollStepInPx="100" delayInMs="10.50" />
				<Wallet
					isShow={true}
				/>
			</Provider>
		);
	}
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
