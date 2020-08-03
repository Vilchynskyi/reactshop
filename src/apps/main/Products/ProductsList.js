import React from "react"

import ProductListItem from "./ProductListItem"
import productsData from "./productsData"

const ProductsList = () => {
    return (
        <div>
            <h1 className="page_title">Products list</h1>
            <div className="row">
                {productsData.map((product) => (
                    <div className="col-lg-6">
                        <ProductListItem
                            name={product.name}
                            description={product.description}
                            type={product.type}
                            capacity={product.capacity}
                            price={product.price}
                        />
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductsList