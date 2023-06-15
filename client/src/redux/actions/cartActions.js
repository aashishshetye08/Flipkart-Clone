import axios from 'axios'
import * as actionTypes from '../constants/cartConstants'

const URL = 'https://flipkartclonebackend-rbd7.onrender.com'

export const addToCart = (id, quantity) => async (dispatch) => {
   try {
      const { data } = await axios.get(`${URL}/product/${id}`)
      dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } })
   } catch (e) {
      dispatch({ type: actionTypes.ADD_TO_CART_ERROR, payload: e.message })

   }
}

export const removeFromCart = (id) => (dispatch) => {
   dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id })

}