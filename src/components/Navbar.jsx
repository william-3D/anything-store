import React from "react";
import "../styles/components/Navbar.scss";

const NavbarIcon = ({ iconClass }) => (
	<li>
		<a>
			<i className={`bi bi-${iconClass} text-xl text-primary`}></i>
		</a>
	</li>
);

const Navbar = () => {
	return (
		<div className="navbar-div">
			<div className="navbar-start">
				<a className="navbar-logo">anythingStore&trade;</a>
			</div>
			<div className="navbar-end">
				<ul className="navbar-items-container">
					<NavbarIcon iconClass="person-fill" />
					<NavbarIcon iconClass="cart-check-fill" />
					<li>
						<a>Menu</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
