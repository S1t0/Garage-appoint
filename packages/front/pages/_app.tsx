import React from "react";
import NavBar from "../components/Navbar";
const MyApp = ({ Component, pageProps }) => {
  console.log("hello");
  return (
    <div>
	  <header>
      <NavBar/>
    </header>
    <main>
      <Component {...pageProps} />
     
    </main>
    </div>
  );
};
export default MyApp;
