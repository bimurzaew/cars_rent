import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import {Box, Toolbar} from "@material-ui/core";
import Car from "./Car";
import { getCarsByID } from "../../../redux/features/cars";
import { getUser } from "../../../redux/features/users";
import PersonalPage from "../../personal/PersonalPage";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cont: {
    marginTop: theme.spacing(10),
  },
  mainImg: {
    backgroundImage:
        "URL(https://barnes-newyork.com/wp-content/uploads/2021/05/NewYork-HomeBanner.jpg)",
    backgroundSize:"cover",
    background:"fixed",
    backgroundRepeat:"no-repeat",
    height:"100vh"
  },
}));

function CarsById(props) {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.cars);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getCarsByID(id));
  }, [id]);

  return (
    <Box className={classes.mainImg}>
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
    </Box>
  );
}

export default CarsById;
