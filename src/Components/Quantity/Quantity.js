import React from 'react'

const Quantity = ({
    onDecrementClick,
    onIncrementClick,
    productCount,
    productId
}) => {
    return(
        <div className="product-quantity">
            <button onClick={() => onDecrementClick()} disabled={productCount <= 1}>-</button>
            <input type="text" value={productCount} readOnly/>
            <button onClick={() => onIncrementClick()} disabled={productCount >= 10}>+</button>
        </div>
    )
}

// class Quantity extends Component {

//     render(){
//         const {
//             productCount
//         } = this.props
//         return(
//             <div className="product-quantity">
//                 <button onClick={() => this.onDecrementClick()} disabled={productCount <= 1}>-</button>
//                 <input type="text" value={productCount} readOnly/>
//                 <button onClick={() => this.onIncrementClick()} disabled={productCount >= 10}>+</button>
//             </div>
//         )
//     }
// }

export default Quantity