import React from "react";
const MyApp = ({ Component, pageProps }) => {
	console.log('hello');
	return (
		<main>
				<Component {...pageProps} />
			</main>
	);
};
export default MyApp;