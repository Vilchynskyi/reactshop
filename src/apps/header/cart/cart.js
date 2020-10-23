import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import CartTotal from '../../../Components/Cart/Cart.js'
import CartProductList from "../../../Components/Cart/CartProductList.js"


const Cart = ({
        products
    }) => {
        return (
            <div className="cart text-center">
                <CartProductList
                    productsInCart={products}
                />
                <CartTotal
                    productsInCart={products}
                />
                <Link to="/cart">Show cart</Link>
            </div>
        )
}

const mapStateToPrors = (state) => ({
    products:state.productInCartState
})

export default connect(
    mapStateToPrors
)(Cart)
