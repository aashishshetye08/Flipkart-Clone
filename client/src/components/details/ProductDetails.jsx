import { Box, Typography, Table, TableBody, TableRow, TableCell, styled } from '@mui/material'
import { LocalOffer as Badge } from '@mui/icons-material'

const SmallText = styled(Box)`
   vertical-align: baseline;
   & > p { 
      font-size: 14px;
      margin-top: 10px;
   }
`
const StyledBadge = styled(Badge)`
   margin-right: 10px;
   color: #00cc00;
   font-size: 15px;
`
const ColumnText = styled(TableRow)`
   font-size: 14px;
   vertical-align: baseline;
   & > td {
      font-size: 14px;
      margin-top: 10px;
      border: none;
   }
`

const ProductDetails = ({ product }) => {

   const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
   const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
   const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000))

   return (
      <>
         <Typography>{product.title.longTitle}</Typography>
         <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
            8 Ratings & 1 Review
            <Box component='span'><img src={fassured} alt="F-logo" style={{ width: 77, marginLeft: 20 }} /></Box>
         </Typography>
         <Typography>
            <Box component='span' style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
            <Box component='span' style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
            <Box component='span' style={{ color: '#388e3c' }}>{product.price.discount}</Box>
         </Typography>
         <Typography>Available Offers</Typography>
         <SmallText>
            <Typography><StyledBadge />Get extra 20% off upto 50 on 1item(s) T&C</Typography>
            <Typography><StyledBadge />Get extra 13% off (price inclusive of discount) T&C</Typography>
            <Typography><StyledBadge />Get extra 13% off (price inclusive of discount) T&C</Typography>
            <Typography><StyledBadge />Get extra 13% off (price inclusive of discount) T&C</Typography>
            <Typography><StyledBadge />Get extra 13% off (price inclusive of discount) T&C</Typography>
         </SmallText>
         <Table>
            <TableBody>
               <ColumnText>
                  <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                  <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
               </ColumnText>
               <ColumnText>
                  <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                  <TableCell>No Warranty</TableCell>
               </ColumnText>
               <ColumnText>
                  <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                  <TableCell>
                     <Box component='span' style={{ color: '#2874f0' }}>SuperCoinNet</Box>
                     <Typography>GST Invoice Available</Typography>
                     <Typography>View more seller staring from ₹{product.price.cost}</Typography>
                  </TableCell>
               </ColumnText>
               <ColumnText>
                  <TableCell colspan={2}>
                     <img src={adURL} alt="logo" style={{ width: 390 }} />
                  </TableCell>
               </ColumnText>
               <ColumnText>
                  <TableCell style={{ color: '#878787' }}>Description</TableCell>
                  <TableCell>{product.description}</TableCell>
               </ColumnText>
            </TableBody>
         </Table>
      </>
   )
}

export default ProductDetails