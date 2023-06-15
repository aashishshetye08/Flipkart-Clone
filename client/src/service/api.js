import axios from 'axios'

const URL = 'https://flipkartclonebackend-rbd7.onrender.com';

export const authenticateSignup = async (data) => {
   try {
      return await axios.post(`${URL}/signup`, data)
   } catch (e) {
      console.log('Error: ',e.message)
   }
}

export const authenticateLogin = async (data) => {
   try {
      return await axios.post(`${URL}/login`, data)
   } catch (e) {
      console.log('Error: ',e.message)
      return e.response
   }
}