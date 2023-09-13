import { Avatar, AvatarGroup, Box, Typography } from '@mui/material'

export const Rightbar = () => {
  return (
    <Box flex={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position={'fixed'}>
        <Typography variant='h6' fontWeight={300}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
          <Avatar alt='Travis Howard' src='/static/images/avatar/2.jpg' />
          <Avatar alt='Cindy Baker' src='/static/images/avatar/3.jpg' />
          <Avatar alt='Agnes Walker' src='/static/images/avatar/4.jpg' />
          <Avatar alt='Trevor Henderson' src='/static/images/avatar/5.jpg' />
          <Avatar alt='Trevor Henderson' src='/static/images/avatar/5.jpg' />
          <Avatar alt='Trevor Henderson' src='/static/images/avatar/5.jpg' />
          <Avatar alt='Trevor Henderson' src='/static/images/avatar/5.jpg' />
          <Avatar alt='Trevor Henderson' src='/static/images/avatar/5.jpg' />
        </AvatarGroup>
      </Box>
    </Box>
  )
}
