import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCars } from "../../redux/features/cars";
import Car from "./Car";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  useEffect(() => {
    dispatch(loadCars());
  }, []);
  return (
    <Container>

        <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center">
          {cars.map(item => {
            return(
                <Grid  item xs={4}>
                  <Car
                      item={item}
                      key={item.id}
                  />
                </Grid>
            )
          })}
        </Grid>
    </Container>
  );
}

export default Cars;
