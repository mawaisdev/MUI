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
import { useRef, useState } from 'react'
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const iconAvatarRef = useRef<HTMLDivElement | null>(null)
  const userboxAvatarRef = useRef<HTMLDivElement | null>(null)
  const [activeAvatarRef, setActiveAvatarRef] =
    useState<React.RefObject<HTMLDivElement> | null>(null)

  const handleOpen = (ref: React.RefObject<HTMLDivElement>) => {
    setIsOpen(true)
    setActiveAvatarRef(ref)
  }

  const handleClose = () => {
    setIsOpen(false)
    setActiveAvatarRef(null)
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
          <Avatar
            alt='Name'
            ref={iconAvatarRef}
            onClick={() => handleOpen(iconAvatarRef)}
          />
        </Icons>
        <Userbox>
          <Avatar
            alt='Name'
            ref={userboxAvatarRef}
            onClick={() => handleOpen(userboxAvatarRef)}
          />{' '}
          <Typography variant='subtitle1'>Awais</Typography>
        </Userbox>
      </StyledToolbar>
      <Menu
        open={isOpen}
        onClose={handleClose}
        anchorEl={activeAvatarRef?.current || undefined}
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
