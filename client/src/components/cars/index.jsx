import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCars } from "../../redux/features/cars";
import Car from "./Car";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Route, Switch, useParams } from "react-router-dom";
import { Toolbar } from "@material-ui/core";
import CarsByCategory from "./CarsByCategory";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cont: {
    marginTop: theme.spacing(10),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
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
      <Container>
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
                <Switch>
                  <Route exact path={`/`}>
                    <Car item={item} key={item.id} />
                  </Route>
                  <Route path={`/cars/:id`}>
                    <CarsByCategory item={item} key={item.id} />
                  </Route>
                </Switch>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default Cars;
