import React from 'react'
import './CartProductListItemExtended.css'
import Quantity from '../Quantity/Quantity'
import { connect } from 'react-redux'



const CartProductListItemExtended = ({
    product,
    productCount,
    deleteFromCart,
    changeProductQuantity,
    isLiked=false,
}) => (     
    <div className="cart-product-list-item-description">
        <div className="row">
            <div className="col-lg-3">
                <img src={product.image} alt={product.name}/>
            </div>
            <div className="col-lg-9">
                <p className="cart-extended-name">
                    <span> {product.name} </span> 
                </p>
                <span>{ isLiked ? <span>&#9829;</span> : <span>&#9825;</span>} </span>
                <p className="cart-extended-price">
                        Price for one item: <span className="bold">$ {product.price} </span> 
                </p>
                <p className="cart-extended-count">
                        Selected quantity: <span className="bold"> {productCount} </span> 
                        
                </p>
                <p className="cart-extended-sum">
                        Sum for this item: <span className="bold sum-price">$ {(product.price * productCount)} </span> 
                </p>
                <button onClick={() => deleteFromCart(product.id)}>Delete product</button>
                <Quantity
                    onDecrementClick={() => (
                        productCount === 1 ? deleteFromCart(product.id)
                        : changeProductQuantity(product.id, productCount-1)
                    )}
                    productCount={productCount}
                    onIncrementClick={() => changeProductQuantity(product.id, productCount+1)}
                    productId={product.id}
                    deleteProduct={0}
                />
            </div>
        </div>
    </div>
)

const mapStateToPrors = (state, props) => ({
    isLiked:state[props.product.id]
})

export default connect(
    mapStateToPrors
)(CartProductListItemExtended)

