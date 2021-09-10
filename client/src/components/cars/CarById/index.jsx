import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import { Toolbar } from "@material-ui/core";
import Car from "./Car";
import { getCarsByID } from "../../../redux/features/cars";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cont: {
    marginTop: theme.spacing(10),
  },
  main: {
    backgroundImage:
      "URL(https://propowerpoint.ru/wp-content/uploads/2013/12/Serebristaya_Dymka_Mini.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    background: "fixed",
    height: "100vh",
  },
}));

function CarsById(props) {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.cars);

  const { id } = useParams();

  useEffect(() => dispatch(getCarsByID(id)), [id]);

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
            return <Car item={item} key={item.id} />;
          })}
        </Grid>
      </Container>
    </>
  );
}

export default CarsById;
