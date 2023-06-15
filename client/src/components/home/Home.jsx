import { useEffect } from 'react'

import Navbar from './Navbar'
import Banner from './Banner'
import Slide from './Slide'
import MidSlide from './MidSlide'
import MidSection from './MidSection'

import { Box, styled } from '@mui/material'

import { getProducts } from '../../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'

const Component = styled(Box)`
   padding: 10px;
   background: #f2f2f2;
`

const Home = () => {

   const { products } = useSelector(state => state.getProducts)   //store
   console.log(products)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getProducts())                //api
   }, [dispatch])

   return (
      <>
         <Navbar />
         <Component>
            <Banner />
            <MidSlide products={products} title="Deal of the Day" timer={true} />
            <MidSection />
            <Slide products={products} title="Discount for You" timer={false} />
            <Slide products={products} title="Suggesting Items" timer={false} />
            <Slide products={products} title="Top Selection" timer={false} />
            <Slide products={products} title="Recommended Items" timer={false} />
            <Slide products={products} title="Trending Offers" timer={false} />
            <Slide products={products} title="Season's Top Picks" timer={false} />
            <Slide products={products} title="Top Deals on Accessories" timer={false} />
         </Component>
      </>
   )
}

export default Home