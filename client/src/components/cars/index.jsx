import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import { Box, TextField, Toolbar } from "@material-ui/core";
import { loadCars } from "../../redux/features/cars";

import Car from "./Car";
import Spinner from "react-bootstrap/Spinner";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cont: {
    marginTop: theme.spacing(10),
  },
  main: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    background: "fixed",
    height: 1715,
  },
  boxSearch: {
    marginBottom: "100px",
  },
  search: {
    width: "250px",
    position: "absolute",
    top: "200px",
    right: "600px",
    borderRadius: "4px",
    backgroundColor: "white",
  },
  mainImg: {
    backgroundImage:
      "URL(https://barnes-newyork.com/wp-content/uploads/2021/05/NewYork-HomeBanner.jpg)",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    background:"fixed",
    height:"356vh"
  },
  wid:{
    width:"100%"
  }
}));

function Cars() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { cars , loading } = useSelector((state) => state.cars);
  const [text, setText] = useState("");
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadCars());
  }, [id]);

  const searchText = cars.filter((car) => {
    return car.name.toLowerCase().includes(text.toLowerCase());
  });

  return (

          <Box className={classes.mainImg}>
      <Toolbar />
      <Container maxWidth={classes.wid}  className={classes.main}>
        <Box className={classes.boxSearch}>
          <TextField
            value={text}
            onChange={(event) => setText(event.target.value)}
            className={classes.search}
            label="Поиск"
            type="search"
            variant="filled"
          />
        </Box>
        {loading ?
            <Grid container>
              <Grid item xs={12}>
                <div className="loading">
                  идет загрузка страницы...
                </div>
              </Grid>
            </Grid>
            :

        <Grid
          classes={classes.cont}
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          {searchText.map((item) => {
            return (

                    <Grid item xs={4} className={classes.gridItem}>
                      <Car item={item} key={item.id} />
              </Grid>
            );
          })}
        </Grid>}
      </Container>
    </Box>

  );
}

export default Cars;
