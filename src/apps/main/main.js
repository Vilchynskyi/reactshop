import React from "react"
import { Route } from "react-router-dom";
import ProductsList from "./Products/ProductsList.js"
import CartPage from "./CartPage/CartPage.js";
import Shipping from "./Shipping/Shipping.js";
import paymentPage from "./PaymentPage/PaymentPage.js";



const Main = (props) => {
	const { 
		addToCart, 
		productsData,
		productsInCart,
		deleteFromCart,
		onDecrementClick,
		onIncrementClick,
	} = props;
	return (
		
		<main className="main">
			<div className="container">
				<div className="row">
					<div className="col-lg-3">
						Filter
					</div>
					<div className="col-lg-9">
						<Route path="/" exact render={() => (
							<ProductsList
								productsData={productsData}
								addToCart={addToCart}
							/>
						)}/>
						<Route path="/cart" render={() => (
							<CartPage
								productsInCart={productsInCart}
								deleteFromCart={deleteFromCart}
								onDecrementClick={onDecrementClick}
								onIncrementClick={onIncrementClick}
							/>
						)}/>
						<Route path="/paymentPage" component={paymentPage}/>
						<Route path="/shipping" component={Shipping}/>
					</div>
				</div>
			</div>
		</main>
	)
}


export default Main