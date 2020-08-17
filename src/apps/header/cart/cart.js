import React, { Component } from "react"

class Cart extends Component {
    state = {
        cartProductCount: 0,
        cartTotalPrice: 0,
    }

    render()  {
        const {
            count,
            price
        } = this.props
        return (
            <div className="cart text-center">
                <div className="products-count">{count}</div>
                <div className="products-price">${price}</div>
            </div>
        )
    }
    

}

export default Cart