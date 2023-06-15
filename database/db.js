import mongoose from "mongoose";

export const Connection = async (URL) => {

   try {
      await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
      console.log('DB Connected Successfully')
   } catch (e) {
      console.log('Error: ', e.message);
   }
}

export default Connection