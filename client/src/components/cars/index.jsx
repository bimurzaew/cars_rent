import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Car from "./Car";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Route, Switch, useParams } from "react-router-dom";
import { Toolbar } from "@material-ui/core";
import CarsByCategory from "./CarsByCategory";
import { loadCars } from '../../redux/features/cars';
import MoreCars from "./MoreCars";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cont: {
    marginTop: theme.spacing(10),
  },
  main:{
    backgroundImage:"URL(https://barnes-newyork.com/wp-content/uploads/2021/05/NewYork-HomeBanner.jpg)",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    background:"fixed",
    height:1715,
  }
}));

function Cars(props) {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.cars);

  const {id} = useParams()

  useEffect(() => {
    dispatch(loadCars());
  }, [id]);

  return (
    <>
      <Toolbar />
      <Container className={classes.main}>
        <Grid
          classes={classes.cont}
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          {cars.map((item) => {
            return (
              <Grid item xs={4}>
                <Car item={item} key={item.id} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default Cars;
