const productsData = [
    {
        id: 1,
        name:"iPhone X",
        description:"This is iPhone X",
        capacity:64,
        price:500,
        type:'phone',
        image: '/images/products/ipad.png',
    },
    {
        id: 2,
        name:"iPhone XS",
        description:"This is iPhone XS",
        capacity:128,
        price:1500,
        type:'phone',
        image: '/images/products/iwatch.png',
    },
    {
        id: 3,
        name:"iPhone 8 plus",
        description:"This is iPhone 8 plus",
        capacity:256,
        price:2000,
        type:'phone',
        image: '/images/products/ipad.png',
    },
    {
        id: 4,
        name:"iPhone 8",
        // description:"This is iPhone 8",
        capacity:64,
        price:1000,
        type:'phone',
        // image: '/images/products/iwatch.png',
    },
]


export const getProductsMap = (array) => {
    return array.reduce((accObj, product) => ({
        ...accObj,
        [product.id]: product
    }), {})
}

export default productsData
