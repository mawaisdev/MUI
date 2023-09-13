import { Box } from '@mui/material'

export const Rightbar = () => {
  return (
    <Box
      bgcolor='royalblue'
      flex={2}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      Rightbar
    </Box>
  )
}
