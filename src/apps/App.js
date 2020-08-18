import React, { Component } from "react"
import { has, update } from "lodash"

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
		productsInCart: {}
	}

	addToCart = (productId, productCount) => {
		console.log(productId)
		if (has(this.state.productsInCart, `[${productId}]`)) {
			const tempCart =	update(this.state.productsInCart, `[${productId}]`, function(count){
				return count + productCount
			});
			this.setState({tempCart})
		} else {
			const tempCart = this.state.productsInCart[productId] = productCount
			this.setState({
				...this.state.productsInCart, ...tempCart
			})
		}
	}
	
	render() {
		return (
			<div>
				<Header
					productsInCart={this.state.productsInCart}
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
