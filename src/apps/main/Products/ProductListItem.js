import React from "react"
import "./ProductListItem.css"

const ProductListItem = () => {
    return (
        <div className="product-list-item"> 
            <div className="product-title">Iphone X</div>
            <div className="product-desc">This is Iphone X</div>
            <div className="product-features">Type: smartphone</div>
            <div className="product-features">Capacity: 256 Gb</div>
            <div className="product-price">799$</div>
            <button className="btn-add-to-cart">Add to cart</button>
        </div>
    )
}

export default ProductListItem
