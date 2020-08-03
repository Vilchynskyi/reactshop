import React from "react"
import './css/reset.css'
import './css/base.css'
import './css/cart.css'
import './css/header.css'
import './css/menu.css'
import Header from './apps/header/header.js'
import Footer from './apps/footer/footer.js'
import Main from './apps/main/main.js'

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
