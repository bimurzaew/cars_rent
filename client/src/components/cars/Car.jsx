import { Button, Card, CardActions, CardContent, CardMedia, Fab } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCarsByID } from '../../redux/features/cars';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: theme.spacing(15),
  },
  media: {
    height: 100,
    backgroundSize: 200,
  },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    margin: {
        margin: theme.spacing(1),
    },
    cardBottom: {
        display: "flex",
        justifyContent: "space-between"
    },
 link: {
    textDecoration: "none",
    color: "white"
 }

}))







function Car({ item }) {
  const classes = useStyles();



  return (




    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
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
      <CardActions className={classes.cardBottom}>
        <Button size="small" color="primary">
          Арендовать
        </Button>
          <Fab
              variant="extended"
              size="small"
              color="primary"
              aria-label="add"
              className={classes.margin}

          >
              <NavLink to={`/cars/${item._id}`}>
                подробнее
              </NavLink>
          </Fab>
      </CardActions>
    </Card>
  );
}

export default Car;
