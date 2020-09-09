import React from "react"
import { Link } from "react-router-dom"
import CartTotal from '../../../Components/Cart/Cart.js'
import CartProductList from "../../../Components/Cart/CartProductList.js"


const Cart = ({
        productsInCart,
    }) => {
        return (
            <div className="cart text-center">
                <CartProductList
                    productsInCart={productsInCart}
                />
                <CartTotal
                    productsInCart={productsInCart}
                />
                <Link to="/cart">Show cart</Link>
            </div>
        )
}

export default Cart
