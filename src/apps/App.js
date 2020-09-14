import React, { Component } from "react"
// import { has, update } from "lodash"

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
		productsInCart: {},
	}

	addToCart = (productId, productCount, productPrice) => {
		this.setState((prevState) => ({
			// productsInCart: Object.assign(
			// 	{},
			// 	prevState.productsInCart,
			// 	{[productId]: (prevState.productsInCart[productId] || 0) + productCount}
			// )
			productsInCart: {
				...prevState.productsInCart,
				[productId]: (prevState.productsInCart[productId] || 0) + productCount
			}
		}))
	}
	deleteFromCart = (productId) => {
		this.setState((prevState) => {
			let prevProductsInCart = {...prevState.productsInCart}

			delete prevProductsInCart[productId]

			return {
				productsInCart: prevProductsInCart
			}
		})
	}
	
	render() {
		return (
			<div>
				<Header
					productsInCart={this.state.productsInCart}
				/>
				<Main
					productsInCart={this.state.productsInCart}
					productsData={productsData}
					addToCart={this.addToCart}
					deleteFromCart={this.deleteFromCart}
				/>
				<Footer/>
			</div>
		)
	}
}

export default App
