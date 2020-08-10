import React, { Component } from "react"

import PropTypes from 'prop-types';

import "./ProductListItem.css"


class ProductListItem extends Component {
    render() {
        const {
            name,
            description = "No description",
            type,
            capacity,
            price,
            image = '/images/products/iphone.png',
        } = this.props
        return (
            <div className="product-list-item">
                <div className="product-image">
                    <img src={image} alt=""/>
                </div> 
                <div className="product-title">{name}</div>
                <div className="product-desc">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity}Gb</div>
                <div className="product-quantity">
                    <button>-</button>
                    <input type="text" defaultValue="1"/>
                    <button>+</button>
                </div>
                <div className="product-price">${price}</div>
                <button className="btn-add-to-cart">Add to cart</button>
            </div>
        )
    }
}

// const ProductListItem = ({

// }) => {}

ProductListItem.propTypes = {
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    type:PropTypes.string.isRequired,
    capacity:PropTypes.number.isRequired,
    price:PropTypes.number.isRequired,
    image:PropTypes.string,
}

// ProductListItem.defaultProps = {
//     description: "No description ..."
// }

export default ProductListItem
