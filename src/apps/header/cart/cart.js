import React from "react"
import { keys } from "lodash"
import { Link } from "react-router-dom"
import productsData, {getProductsMap} from "../../Main/Products/productsData.js" 
import CartTotal from '../../../Components/Cart/Cart.js'


const Cart = ({
        productsInCart,
        productsObject = getProductsMap(productsData)
    }) => {
        return (
            <div className="cart text-center">
                {
                    keys(productsInCart).map((prodId)=> (
                        <div key={prodId}>
                            {productsObject[prodId].name}: {productsInCart[prodId]}
                        </div>
                    ))
                }
                <CartTotal
                    productsInCart={productsInCart}
                />
                <Link to="/cart">Show cart</Link>
            </div>
        )
}

export default Cart
