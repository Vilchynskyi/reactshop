import React from "react"

import ProductListItem from "./ProductListItem"


const ProductsList = (props) => {
    const { 
        productsData = [], 
        addToCart 
    } = props;
    return (
        <div>
            <h1 className="page_title">Products list</h1>
            <div className="row">
                {productsData.map(({
                    id,
                    name,
                    description,
                    type,
                    capacity,
                    price,
                    image,
                } = {}) => (
                        <div className="col-lg-6" key={id}>
                            <ProductListItem
                                id={id}
                                name={name}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                                addToCart={addToCart}
                            />
                        </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default ProductsList