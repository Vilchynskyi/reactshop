import React from 'react'
import { keys } from "lodash"
import productsData, {getProductsMap} from "../../Apps/Main/Products/productsData" 
import CartProductListItem from './CartProductListItem'


const CartProductList = ({
    productsInCart,
    productsObject = getProductsMap(productsData),
    CartItem = CartProductListItem,
    deleteFromCart,
    onDecrementClick,
    onIncrementClick,
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
                        onDecrementClick={onDecrementClick}
                        onIncrementClick={onIncrementClick}
                    />
                ))
            }
        </div>
    )
}

export default CartProductList