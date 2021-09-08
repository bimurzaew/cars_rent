import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { getCarsByID } from '../../redux/features/cars';
import {
  Button, Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Fab,
  Grid
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({

  medImg: {
    height:"100px"
  }
})




function MoreCars() {
  const classes = useStyles()
  const { cars } = useSelector(state => state.cars);
  const {id} = useParams();

  const dispatch = useDispatch()
  useEffect(() => dispatch(getCarsByID(id)), [])

  console.log(cars)

  return (
    <>
      <Container>
        <Grid container xs={12}>

       <Grid item>
         {cars.map(item => {
             return (
               <Card>
                 <CardMedia
                   className={classes.medImg}
                   image={item.image}
                   title="Contemplative Reptile"
                 />
                 <CardContent>
                   <Typography gutterBottom variant="h6" component="h2">
                     {item.name}
                   </Typography>
                   <Typography variant="body2" color="textPrimary" component="p">
                     {item.desc}
                   </Typography>
                   <Typography variant="body2" color="secondary" component="p">
                     {item.price} ₽ / в сутки
                   </Typography>
                 </CardContent>
                 <CardActions>
                   <Button size="small" color="primary">
                     Арендовать
                   </Button>
                 </CardActions>
               </Card>
             )

           }
         )}
       </Grid>




        </Grid>

      </Container>

    </>
  );
}

export default MoreCars;