import React from "react";
import Link from "next/link";
import Cart from "./Cart";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";

const NavBar = () => {
	const { showCart, setShowCart, totalQuantities } = useStateContext();

	return (
		<div className="navbar-wrapper">
			<div className="navbar-container">
				<p className="logo">
					<Link href="/">Ecommerce</Link>
				</p>

				<button
					type="button"
					className="cart-icon"
					onClick={() => setShowCart((prev) => !prev)}
				>
					<AiOutlineShopping />
					<span className="cart-item-qty">{totalQuantities}</span>
				</button>

				{showCart && <Cart />}
			</div>
		</div>
	);
};

export default NavBar;
