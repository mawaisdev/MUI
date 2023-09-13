import {
  Article as ArticleIcon,
  Home as HomeIcon,
  People as PeopleIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Storefront as StorefrontIcon,
  AccountCircleRounded as AccountCircleRoundedIcon,
  ModeNightOutlined as ModeNightOutlinedIcon,
} from '@mui/icons-material'
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material'
export const Sidebar = () => {
  return (
    <Box
      flex={1}
      flexDirection={'column'}
      p={2}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton component={'a'} href='/home'>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={'a'} href='/pages'>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary='Pages' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={'a'} href='/groups'>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary='Groups' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={'a'} href='/store'>
            <ListItemIcon>
              <StorefrontIcon />
            </ListItemIcon>
            <ListItemText primary='MarketPlace' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={'a'} href='/friends'>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary='Friends' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={'a'} href='/home'>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary='Settings' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={'a'} href='/home'>
            <ListItemIcon>
              <AccountCircleRoundedIcon />
            </ListItemIcon>
            <ListItemText primary='Profile' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ModeNightOutlinedIcon />
            </ListItemIcon>
            <Switch defaultChecked />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}
