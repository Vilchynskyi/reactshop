import React from "react"
import Cart from "./cart/cart"
import Menu from "./menu/menu"
import Logo from "./logo/logo"


const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="row">
					<div className="col-lg-3">
						<Logo/>
					</div>
					<div className="col-lg-6">
						<Menu/>
					</div>
					<div className="col-lg-3">
						<Cart/>	
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header