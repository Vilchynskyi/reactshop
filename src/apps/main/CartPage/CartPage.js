import React from "react"
import { connect } from "react-redux"
import CartTotal from "../../../Components/Cart/Cart.js"
import CartProductList from "../../../Components/Cart/CartProductList.js"
import CartProductListItemExtended from "../../../Components/Cart/CartProductListItemExtended.js"


const CartPage = ({
    productsInCart,
}) => {
    return (
        <div>
            <h1 className="page_title">Cart</h1>
            <CartProductList
                productsInCart={productsInCart}
                CartItem={CartProductListItemExtended}
            />
            <CartTotal
                productsInCart={productsInCart}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    productsInCart: state.productInCartState
})

export default connect(
    mapStateToProps,
)(CartPage)