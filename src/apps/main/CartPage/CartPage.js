import React from "react"
import CartTotal from "../../../Components/Cart/Cart.js"
import CartProductList from "../../../Components/Cart/CartProductList.js"


const CartPage = ({
    productsInCart,
}) => {
    return (
        <div>
            <h1 className="page_title">Cart</h1>
            <CartProductList
                productsInCart={productsInCart}
            />
            <CartTotal
                productsInCart={productsInCart}
            />
        </div>
    )
}

export default CartPage