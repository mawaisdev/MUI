import { Box, Stack } from '@mui/material'
import { Feed, Navbar, Rightbar, Sidebar } from './Components'

const App = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction='row' spacing={2}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  )
}

export default App
