import React from "react"
import { keys } from "lodash"
import productsData from "../../Main/Products/productsData.js" 


const productsObject = productsData.reduce((accObj, product) => ({
    ...accObj,
    [product.id]: product
}),{})

console.log(productsObject)

const Cart = ({
        productsInCart,
        totalPrice = 0,
    }) => {

        const fullPrice = totalPrice.reduce((acc, price) => {
            return acc + price
        }, 0)

        return (
            <div className="cart text-center">
                {
                    keys(productsInCart).map((prodId)=> (
                        <div>{productsObject[prodId].name} : {productsInCart[prodId]}</div>
                    ))
                }
                <div>
                    Total: ${fullPrice} 
                </div>
            </div>
        )
}


export default Cart
