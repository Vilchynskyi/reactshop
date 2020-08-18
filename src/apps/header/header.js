import React from "react"
import Cart from "./Cart/Cart.js"
import Menu from "./Menu/Menu.js"
import Logo from "./Logo/Logo.js"


const Header = (props) => {
	const {
		productsInCart
	} = props
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
						<Cart
							productsInCart={productsInCart}
							// price={productsInCart[2]}
						/>	
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header