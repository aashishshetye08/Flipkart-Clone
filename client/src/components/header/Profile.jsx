import { useState } from 'react';
import { Box, Typography, Menu, MenuItem, styled } from '@mui/material'
import { PowerSettingsNew } from '@mui/icons-material';

const Component = styled(Menu)`
   margin-top: 5px;
`
const Logout = styled(Typography)`
   font-size: 14px;
   margin-left: 20px;
`

const Profile = ({ account, setAccount }) => {

   const [open, setOpen] = useState(false);

   return (
      <>
         <Box onClick={(e) => setOpen(e.currentTarget)}><Typography style={{ marginTop: 2, cursor: 'pointer' }}>{account}</Typography></Box>
         <Component
            aria-labelledby="demo-positioned-button"
            anchorEl={open}
            open={Boolean(open)}
            onClose={() => setOpen(false)}
         >
            <MenuItem onClick={() => { setOpen(false); setAccount(''); }}>
               <PowerSettingsNew color="primary" fontsize="small" />
               <Logout>Logout</Logout>
            </MenuItem>
         </Component>
      </>
   )
}

export default Profile