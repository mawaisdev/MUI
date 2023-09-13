import {
  Menu,
  AppBar,
  Badge,
  InputBase,
  MenuItem,
  Typography,
} from '@mui/material'
import { Mail, Menu as MenuIcon, Notifications } from '@mui/icons-material'
import {
  Avatar,
  Icons,
  Search,
  StyledToolbar,
  Userbox,
} from '../styles/styledComponents'
import { useState } from 'react'
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <AppBar position='sticky' sx={{ bgcolor: 'gray' }}>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
          Awais
        </Typography>
        <MenuIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder='Search....' />
        </Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <Mail />
          </Badge>
          <Badge badgeContent={4} color='error'>
            <Notifications />
          </Badge>
          <Avatar alt='Name' onClick={handleOpen} />
        </Icons>
        <Userbox>
          <Avatar alt='Name' onClick={handleOpen} />
          <Typography variant='subtitle1'>Awais</Typography>
        </Userbox>
      </StyledToolbar>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        open={isOpen}
        onClose={handleOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}
