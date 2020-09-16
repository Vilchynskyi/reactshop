import React from 'react'
import { keys } from "lodash"
import productsData, {getProductsMap} from "../../Apps/Main/Products/productsData" 
import CartProductListItem from './CartProductListItem'


const CartProductList = ({
    productsInCart,
    productsObject = getProductsMap(productsData),
    CartItem = CartProductListItem,
    deleteFromCart,
    changeProductQuantity,
}) => {
    return (
        <div>
            {
                keys(productsInCart).map((prodId) => (
                    <CartItem
                        product={productsObject[prodId]}
                        productCount={productsInCart[prodId]}
                        key={prodId}
                        deleteFromCart={deleteFromCart}
                        changeProductQuantity={changeProductQuantity}
                    />
                ))
            }
        </div>
    )
}

export default CartProductList