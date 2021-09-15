import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import { Box, Paper, TextField, Toolbar } from "@material-ui/core";
import { loadCars } from "../../redux/features/cars";
import Car from "./Car";
import "./style.css";
import Loading from "./Loading";
import Desc from "./Desc";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  info_block: {
    margin: "120px auto 50px",
    width: 950,
    backgroundColor: "rgba(255,255,255,0.8)",
    padding: 15,
  },
  title: {
    margin: "150px auto 0",
    width: 950,
    backgroundColor: "rgba(255,255,255,0.8)",
    padding: 15,
  },
    // title: {
    //   margin: "150px auto 0",
    //   width: 950,
    //   backgroundColor: "transparent",
    //   padding: 15,
    //   boxShadow: "none",
    //   color: "white",
    //   fontSize: 30,
    //   textAlign: "center",
    // },
    text_title: {
      display: "flex",
      alignItems: "center",
    },
    type_p: {
      marginLeft: 10,
    },
    cont: {
      marginTop: theme.spacing(10),
    },
    main: {
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      background: "fixed",
    },
    boxSearch: {
      textAlign: "center",
    },
    search: {
      width: "600px",
      margin: "auto",
      position: "static",
      borderRadius: "4px",
      backgroundColor: "white",
      textAlign: "center",
    },
    mainImg: {
      backgroundImage:
        "URL(https://barnes-newyork.com/wp-content/uploads/2021/05/NewYork-HomeBanner.jpg)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      background: "fixed",
      paddingBottom: 15,
    },
    wid: {
      width: "100%",
    },
}));

function Cars() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { cars, loading } = useSelector((state) => state.cars);
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
      <Container maxWidth={classes.wid} className={classes.main}>
        {loading ? (
          <Grid container>
            <Grid item xs={12}>
              <div className="loading">
                <Loading />
              </div>
            </Grid>
          </Grid>
        ) : (
          <Desc />
        )}
        <Box className={classes.boxSearch}>
          <TextField
            id={"cars"}
            value={text}
            onChange={(event) => setText(event.target.value)}
            className={classes.search}
            placeholder={"Поиск"}
            type="search"
            variant="filled"
          />
        </Box>
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
        </Grid>

      </Container>
    </Box>
  );
}

export default Cars;
