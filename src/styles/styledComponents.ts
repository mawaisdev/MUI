import { Avatar as AvatarBase, Box, styled, Toolbar } from '@mui/material'

export const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})
export const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'whitesmoke',
  color: 'black',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}))

export const Icons = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}))

export const Userbox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}))

export const Avatar = styled(AvatarBase)({
  width: 30,
  height: 30,
})
