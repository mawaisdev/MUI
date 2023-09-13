import { Favorite, FavoriteBorder } from '@mui/icons-material'
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Checkbox,
} from '@mui/material'

export const PostCard = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height={'10%'}
          image='https://img.freepik.com/premium-photo/cute-baby-panda-bear-with-big-eyes-3d-rendering-cartoon-illustration_691560-4917.jpg'
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Panda
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Pandas ranging across all continents except Antarctica Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Fugiat facere eum
            exercitationem iure. Neque quis, a debitis ipsum reprehenderit eaque
            omnis vel dolorem laudantium nulla saepe modi vero sit consectetur!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite sx={{ color: 'red' }} />}
        />
      </CardActions>
    </Card>
  )
}
