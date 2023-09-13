import { Box, styled, Toolbar } from '@mui/material'

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

export const Icons = styled(Box)({
  backgroundColor: 'whitesmoke',
})
