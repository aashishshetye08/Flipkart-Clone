import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getProductReducer, getProductDetailsReducer } from './reducer/productReducer'
import { cartReducer } from './reducer/cartReducer'

const reducer = combineReducers({
   getProducts: getProductReducer,
   getProductDetails: getProductDetailsReducer,
   cart: cartReducer
})

const middleware = [thunk]

const store = createStore(
   reducer,
   composeWithDevTools(applyMiddleware(...middleware))
)

export default store;