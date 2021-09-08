import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import "./style.css";
import {Container, Grid, Toolbar} from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import Fab from "@material-ui/core/Fab";
import { NavLink } from "react-router-dom";

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
  main: {
    backgroundImage:
      "URL(https://barnes-newyork.com/wp-content/uploads/2021/05/NewYork-HomeBanner.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    background: "fixed",
    height: 1715,
  },
  cont: {
    marginTop: theme.spacing(10),
  },
}));

function CarsByCategory(props) {
  const classes = useStyles();

  const { cars } = useSelector((state) => state.cars);

  // const [value, setValue] = useState(item.price);
  //
  //
  // const handleChange = (event, newValue) => {
  //     setValue(newValue);
  // };

  return(
      <>
        <Toolbar/>
      <Container className={classes.main}>
          <Grid
              classes={classes.cont}
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
          >
              {
                  cars.map((item) => {
                      return (

                          <Grid item xs={4}>
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
                                          {/*цена: {value} ₽*/}
                                      </Typography>
                                      <span className={classes.day}>
                  <span>Сутки :</span>
                                          {/*<Slider*/}
                                          {/*    className={classes.index}*/}
                                          {/*    step={item.price}*/}
                                          {/*    marks*/}
                                          {/*    min={item.price}*/}
                                          {/*    max={item.price*10}*/}
                                          {/*    onChange={handleChange}*/}
                                          {/*/>*/}
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
                          </Grid>

                      );
                  })
              }
          </Grid>
      </Container>
      </>
  )

}

export default CarsByCategory;
