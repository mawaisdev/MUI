import { AppBar, InputBase, Typography } from '@mui/material'
import { Menu } from '@mui/icons-material'
import { Icons, Search, StyledToolbar } from '../styles/styledComponents'
export const Navbar = () => {
  return (
    <AppBar position='sticky' sx={{ bgcolor: 'gray' }}>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
          Awais
        </Typography>
        <Menu sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder='Search....' />
        </Search>
        <Icons>Icons Container</Icons>
      </StyledToolbar>
    </AppBar>
  )
}
