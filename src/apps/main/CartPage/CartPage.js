import React from "react"
import CartTotal from "../../../Components/Cart/Cart.js"
import CartProductList from "../../../Components/Cart/CartProductList.js"
import CartProductListItemExtended from "../../../Components/Cart/CartProductListItemExtended.js"


const CartPage = ({
    productsInCart,
    deleteFromCart
}) => {
    return (
        <div>
            <h1 className="page_title">Cart</h1>
            <CartProductList
                productsInCart={productsInCart}
                CartItem={CartProductListItemExtended}
                deleteFromCart={deleteFromCart}
            />
            <CartTotal
                productsInCart={productsInCart}
            />
        </div>
    )
}

export default CartPage