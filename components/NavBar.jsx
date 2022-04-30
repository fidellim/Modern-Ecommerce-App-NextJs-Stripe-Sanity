import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";

const NavBar = () => {
	const { showCart, setShowCart, totalQuantities } = useStateContext();

	return (
		<div className="navbar-container">
			<p className="logo">
				<Link href="/">Ecommerce</Link>
			</p>

			<button type="button" className="cart-icon" onClick="">
				<AiOutlineShopping />
				<span className="cart-item-qty">{totalQuantities}</span>
			</button>
		</div>
	);
};

export default NavBar;
