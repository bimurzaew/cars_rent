import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import "./carsById-style.css";

import {Box, Button, Container, Paper} from "@material-ui/core";
import {Carousel, CarouselItem} from "react-bootstrap";


import { useDispatch, useSelector } from "react-redux";
import { getUser, putCar, rentCar } from "../../../redux/features/users";
import { useParams } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: theme.spacing(25),
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
    color: "#9B3C51",
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
    display: "flex",
    justifyContent: "space-between",
    width:190,
    color: "#9B3C51",
  },
  value: {
    textAlign: "center",
    marginTop: 5,
    color: "#9B3C51",
  },
  btmRent: {
    display: "block",
    margin: "0 auto 5px",
  },
  list:{
    padding:30,
    marginTop:180,
    opacity:.7
  }
}));

function Car({ item }) {
  const classes = useStyles();
  const [value, setValue] = useState(item.price);
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleRentCar = (id) => {
    dispatch(rentCar(id));
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handlePutCar = (id) => {
    dispatch(putCar(id));
  };
  useEffect(() => {
    dispatch(getUser());
  }, []);
  const { user } = useSelector((state) => state.users);


  return (
      <>
      <Grid item xs={6}>
        <Paper className={classes.list}>
          <h1 className="title">{item.name}</h1>
          <h2 className="rent-text">Укажите срок аренды в днях</h2>
          <span className="rent">
          <span className={classes.day}>
            <p>{value * item.price} ₽</p>
            <p>/ Сутки:{value}</p>
          </span>
            <Slider
                className={classes.index}
                step={1}
                marks
                min={1}
                max={10}
                onChange={handleChange}
            />
        </span>
        </Paper>
      </Grid>
      <Grid item xs={3}>
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
              цена: {item.price} ₽ / в сутки
            </Typography>
          </CardContent>
          <Typography
            className={classes.value}
            variant="subtitle1"
            color="initial"
            component="h2"
          >
            Итого: {item.price * value} ₽
          </Typography>
          {user?.carRent?._id === id ? (
            <Button
              onClick={() => {
                handlePutCar(id);
              }}
              className={classes.btmRent}
              variant="contained"
              color="secondary"
            >
              вернуть
            </Button>
          ) : (
            <Button
              onClick={() => {
                handleRentCar(id);
              }}
              className={classes.btmRent}
              variant="contained"
              color="secondary"
              disabled={item.amount === 0 || user?.carRent || !user}
            >
              {item.amount === 0
                ? "нет свободных машин"
                : user?.carRent
                ? "у вас есть машина"
                : !user
                ? "авторизируйтесь"
                : "арендовать"}
            </Button>
          )}
        </Card>
      </Grid>
      </>

  );
}

export default Car;