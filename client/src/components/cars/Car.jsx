
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import Slider from '@material-ui/core/Slider';
import {NavLink} from "react-router-dom";
import {Container, TextField} from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: theme.spacing(15),
    borderRadius: 10,
  },
  price: {
    width: 200,
  },
  media: {
    height: 100,
    backgroundSize: 200,
  },
  index: {
    width: 250,
  },
  extendedIcon: {
    width: "fit-content",
    marginRight: theme.spacing(1),
  },
  margin: {
    display: "block",
    margin: "auto",
  },

  content: {
    width: 335,
    margin: "20px auto 0",
    borderRadius: 5,
    backgroundColor: "#11314F",
    color: "white",
  },
  day: {
    width: 310,
    display: "flex",
    justifyContent: "space-between",
  },
}));

function Car({ item }) {
  const classes = useStyles();
  const [value, setValue] = useState(item.price);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Container>
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={item.image}
        title="Contemplative Reptile"
      />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h6" component="h2">
          {item.name}
        </Typography>
        <Typography variant="body2" color="inherit" component="p">
          <span>Двигатель:</span> {item.desc}
        </Typography>
        <Typography variant="body2" color="initial" component="p">
          цена: {value} ₽
        </Typography>
        <span className={classes.day}>
          <span>Сутки :</span>
          <Slider
            className={classes.index}
            step={item.price}
            marks
            min={item.price}
            max={item.price * 10}
            onChange={handleChange}
          />
        </span>
      </CardContent>

      <CardActions>
        <Fab
          variant="extended"
          size="small"
          color="primary"
          aria-label="add"
          className={classes.margin}
        >
          <NavLink to={`/cars/${item._id}`}>подробнее</NavLink>
        </Fab>
      </CardActions>
    </Card>
      </Container>
  );
}

export default Car;
