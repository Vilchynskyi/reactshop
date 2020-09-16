import React, { Component } from "react"
import { omit } from "lodash"

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

	addToCart = (productId, productCount) => {
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
		this.setState((prevState) => ({
			productsInCart: omit(prevState.productsInCart, productId)
		}))
	}
	
	onDecrementClick = (productId) => {
        this.setState((prevState) => ({
            productsInCart: {
				...prevState.productsInCart,
				[productId]:prevState.productsInCart[productId] - 1
			}
        }))
    }

    onIncrementClick = (productId) => {
        this.setState((prevState) => ({
            productsInCart: {
				...prevState.productsInCart,
				[productId]:prevState.productsInCart[productId] + 1
			}
        }))
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
					onDecrementClick={this.onDecrementClick}
					onIncrementClick={this.onIncrementClick}
				/>
				<Footer/>
			</div>
		)
	}
}

export default App
