import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<div className="layout">
			<Head>
				<title>Ecommerce Store</title>
			</Head>
			<header>
				<NavBar />
			</header>
			<main className="main-container">{children}</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Layout;
