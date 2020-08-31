import React, { Component } from "react"
import { keys } from "lodash"
import productsData from "../../Main/Products/productsData.js" 


class Cart extends Component {
    state = {
        cartProductCount: 0,
        cartTotalPrice: 0,
    }

    render()  {
        const {
            productsInCart
        } = this.props

        return (
            <div className="cart text-center">
                {
                    keys(productsInCart).map((productId) => (
                        <div>{productsData[productId - 1].name}: {productsInCart[productId]}</div>
                    ))
                }
            </div>
        )
    }
    

}

export default Cart