import React from "react"
import { keys } from "lodash"
import productsData, {getProductsMap} from "../../Main/Products/productsData.js" 
import CartTotal from "../../../Components/Cart/Cart.js"


const CartPage = ({
    productsInCart,
    productsObject = getProductsMap(productsData)
}) => {
    return (
        <div>
            <h1 className="page_title">Cart</h1>
            {keys(productsInCart).map((prodId)=> (
                    <div key={prodId}>
                        {productsObject[prodId].name}: {productsObject[prodId].price}$ * {productsInCart[prodId]}
                    </div>
                ))
            }
            <CartTotal
                productsInCart={productsInCart}
            />
        </div>
    )
}

export default CartPage