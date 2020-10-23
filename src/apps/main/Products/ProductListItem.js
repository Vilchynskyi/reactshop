import React, { Component } from "react"

import PropTypes from 'prop-types';

import "./ProductListItem.css"
import Quantity from "../../../Components/Quantity/Quantity";
import { connect } from "react-redux";

class ProductListItem extends Component {

    state = {
        productCount:1,
    }
  
    onDecrementClick = () => {
        this.setState((prevState) => ({
            productCount:prevState.productCount - 1
        }))
    }

    onIncrementClick = () => {
        this.setState((prevState) => ({
            productCount:prevState.productCount + 1
        }))
    }


    render() {
        const {
            id,
            name,
            description = "No description",
            type,
            capacity,
            price,
            image = '/images/products/iphone.png',
            addToCart,
            isLiked=false,
            addLike,
            removeLike,
            addProduct
        } = this.props;
        const { 
            productCount 
        } = this.state;
        return (
            <div className="product-list-item">
                <div className="product-image">
                    <img src={image} alt=""/>
                </div>
                <button onClick={() => isLiked ? removeLike(id) : addLike(id)}>
                    { isLiked ? <span>&#9829;</span> : <span>&#9825;</span>}    
                </button> 
                <div className="product-title">{name}</div>
                <div className="product-desc">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity}Gb</div>
                <Quantity
                    onDecrementClick={this.onDecrementClick}
                    onIncrementClick={this.onIncrementClick}
                    productCount={this.state.productCount}
                />
                <div className="product-price">${price}</div>
                <button className="btn-add-to-cart" onClick={() => {
                    addProduct(id, productCount);
                }}>
                    Add to cart id:{id}
                </button>
            </div>
        )
    }
}


ProductListItem.propTypes = {
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    type:PropTypes.string.isRequired,
    capacity:PropTypes.number.isRequired,
    price:PropTypes.number.isRequired,
    image:PropTypes.string,
    addToCart:PropTypes.func.isRequired,
}


const mapStateToPrors = (state, props) => ({
    isLiked:state.productsLikeState[props.id]
})

const mapDispatchToPrors = (dispatch) => ({
    addLike:(id) => dispatch({
        type:"LIKE",
        id
    }),
    removeLike:(id) => dispatch({
        type:"DISLIKE",
        id
    }),
    addProduct:(id, count) => dispatch({
        type:"ADD_PRODUCT_TO_CART",
        id,
        count
    }),

})

export default connect(
    mapStateToPrors,
    mapDispatchToPrors
)(ProductListItem)
