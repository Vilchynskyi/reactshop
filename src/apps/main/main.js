import React from "react"

import ProductsList from "./Products/ProductsList.js"

const Main = (props) => {
	const { 
		addToCart, 
		productsData 
	} = props;
	return (
		<main className="main">
			<div className="container">
				<div className="row">
					<div className="col-lg-3">
						Filter
					</div>
					<div className="col-lg-9">
						<ProductsList
							productsData={productsData}
							addToCart={addToCart}
						/>
					</div>
				</div>
			</div>
		</main>
	)
}


export default Main