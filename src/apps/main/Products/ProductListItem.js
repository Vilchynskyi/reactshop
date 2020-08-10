import React from "react"

import PropTypes from 'prop-types';

import "./ProductListItem.css"

const ProductListItem = ({
    name,
    description,
    type,
    capacity,
    price,
    image,
}) => {
    return (
        <div className="product-list-item">
            <div className="product-image">
                <img src={image} alt=""/>
            </div> 
            <div className="product-title">{name}</div>
            <div className="product-desc">{description}</div>
            <div className="product-features">Type: {type}</div>
            <div className="product-features">Capacity: {capacity}</div>
            <div className="product-price">${price}</div>
            <button className="btn-add-to-cart">Add to cart</button>
        </div>
    )
}

ProductListItem.propTypes = {
    name:PropTypes.string,
    description:PropTypes.string,
    type:PropTypes.string,
    capacity:PropTypes.number,
    price:PropTypes.number,
    image:PropTypes.string,
}

export default ProductListItem
