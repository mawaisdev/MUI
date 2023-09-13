import { Box } from '@mui/material'
import { PostCard } from '.'

export const Feed = () => {
  const posts = [1, 5]
  return (
    <Box flex={4} p={2}>
      {posts.map((i) => (
        <PostCard key={i} />
      ))}
    </Box>
  )
}
