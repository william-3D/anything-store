import React, { useState } from "react";
import "../styles/components/Navbar.scss";

const NavbarIcon = ({ iconClass, onMouseEnter }) => (
	<li>
		<a onMouseEnter={onMouseEnter}>
			<i className={`bi bi-${iconClass} text-xl text-primary`}></i>
		</a>
	</li>
);

const Navbar = () => {
	const [isCartOpen, setIsCartOpen] = useState(false);

	const handleMouseEnter = () => {
		setIsCartOpen(true);
	};

	const handleMouseLeave = () => {
		setIsCartOpen(false);
	};

	return (
		<>
			<div
				className={`global-border navbar-div ${
					isCartOpen ? "expanded-navbar" : ""
				}`}
			>
				<div className="navbar-content">
					<div className="navbar-start">
						<a className="navbar-logo">anythingStore&trade;</a>
					</div>
					<div className="navbar-end">
						<ul className="navbar-items-container">
							{!isCartOpen && (
								<li>
									<details>
										<summary>Menu</summary>
										<ul className="global-border bg-white w-40 right-0">
											<li>
												<a>Shop</a>
											</li>
											<li>
												<a>About Us</a>
											</li>
											<li>
												<a>Blog</a>
											</li>
										</ul>
									</details>
								</li>
							)}
							{!isCartOpen && (
								<NavbarIcon iconClass="person-fill" />
							)}
							<NavbarIcon
								iconClass="cart-check-fill"
								onMouseEnter={handleMouseEnter}
							/>
						</ul>
					</div>
				</div>

				{/* Cart Summary */}
				{isCartOpen && (
					<div
						className="expanded-content"
						onMouseLeave={handleMouseLeave}
					>
						<div className="cart-summary">
							<h2>Your Cart</h2>
							<p>No items in your cart.</p>
						</div>
					</div>
				)}
			</div>

			{/* Overlay */}
			{isCartOpen && (
				<div className="overlay" onMouseEnter={handleMouseLeave}></div>
			)}
		</>
	);
};

export default Navbar;
