import React from "react"
import { keys } from "lodash"
import { Link } from "react-router-dom"
import productsData from "../../Main/Products/productsData.js" 


const productsObject = productsData.reduce((accObj, product) => ({
    ...accObj,
    [product.id]: product
}),{})

console.log(productsObject)

const Cart = ({
        productsInCart,
    }) => {
        return (
            <div className="cart text-center">
                {
                    keys(productsInCart).map((prodId)=> (
                        <div>{productsObject[prodId].name} : {productsInCart[prodId]}</div>
                    ))
                }
                <div>
                    Total: ${
                        keys(productsInCart).reduce((total, productId) => (
                            total + (productsObject[productId].price * productsInCart[productId])
                        ), 0)
                    } 
                </div>
                <Link to="/cart">Show cart</Link>
            </div>
        )
}

export default Cart
