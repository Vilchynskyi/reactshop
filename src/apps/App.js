import React from "react"

import '../common/style/reset.css'
import '../common/style/base.css'
import './Header/Cart/cart.css'
import './Header/header.css'
import './Header/Menu/menu.css'

import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'
import Main from './Main/Main.js'


const App = () => {
	return (
		<div>
			<Header/>
			<Main/>
			<Footer/>
		</div>
	) 
}


export default App
