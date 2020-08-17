import React, { Component } from "react"

import '../common/style/reset.css'
import '../common/style/base.css'
import './Header/Cart/cart.css'
import './Header/header.css'
import './Header/Menu/menu.css'

import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'
import Main from './Main/Main.js'
import productsData from "./Main/Products/productsData.js"


class App extends Component {
	
	state = {
		cartData: {
			count:0,
			price:0,
		}
	}

	addToCart = (summaryPrice, productCount) => {
		const { cartData = {} } = this.state;
		const { count = 0, price } = cartData;
		this.setState({ cartData: { count: count + productCount, price: price + summaryPrice } });
	}
	
	render() {
		return (
			<div>
				<Header
					cartData={this.state.cartData}
				/>
				<Main
					productsData={productsData}
					addToCart={this.addToCart}
				/>
				<Footer/>
			</div>
		)
	}
}


export default App
