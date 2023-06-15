import { products } from "./constants/data.js"
import Product from "./model/productSchema.js"

const DefaultData = async () => {

   try {
      await Product.insertMany(products);
      console.log('Data imported Successfully')
   } catch (e) {
      console.log('Error: ',e.message)
   }

}

export default DefaultData