import { combineReducers } from 'redux' 
import cartReducer from './cartReducer'
import productLikeReducer from './productLikeReducer'

const rootReducer = combineReducers({
    productsLikeState: productLikeReducer,
    productInCartState: cartReducer,
})

export default rootReducer