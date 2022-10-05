import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function VacationCard({vacation, type}) {
  return (
    <Card sx={{ margin: '15px' }}>
      <CardMedia
        height="160"
        width='50%'
        component="img"
        image="https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?w=1536"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`${vacation.city}, ${vacation.country}`}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {`${vacation.temperature} C`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {vacation.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => console.log('Todo - Add or remove items in userInfo favorites')} size="small">{type === 'userFavorites' ? <FavoriteIcon /> : <FavoriteBorderIcon />}</Button>
      </CardActions>
    </Card>
  );
}
