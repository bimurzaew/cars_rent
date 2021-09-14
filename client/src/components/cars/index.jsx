import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import {Box, Button, Paper, TextField, Toolbar} from "@material-ui/core";
import { loadCars } from "../../redux/features/cars";
import Typical from "react-typical";
import Car from "./Car";
import "./style.css"
import Loading from "./Loading";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  info_block:{
    margin: "120px auto 50px",
    width:950,
    backgroundColor:"rgba(255,255,255,0.8)",
    padding:15
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
    // marginBottom: "100px",
  },
  search: {
    width: "250px",
    position: "static",
    // top: "200px",
    // right: "600px",
    borderRadius: "4px",
    backgroundColor: "white",
  },
  mainImg: {
    backgroundImage:
      "URL(https://barnes-newyork.com/wp-content/uploads/2021/05/NewYork-HomeBanner.jpg)",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    background:"fixed",
    paddingBottom:15
  },
  wid:{
    width:"100%"
  },
  block_title:{
    color:"#9B3C51"
  },
  block_list:{
    color:"#256072"
  },
  pick_up:{
    display:"block",
    margin:"auto"
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
        {loading ?
            <Grid container>
              <Grid item xs={12}>
                <div className="loading">
                  <Loading/>
                </div>
              </Grid>
            </Grid>
            :


        <Paper className={classes.info_block}>
          <p className={classes.block_title}>
            Остался без машины , есть срочные дела или на работу опаздываешь?
          </p>
          <p className={classes.block_title}>
            Наши марки абсолютно новые и не подведут вас в самый не подходящий момент.
          </p>
          <p className={classes.block_title}>
            А если так случится, что по нашей вине и вы опоздаете , то мы за предоставленные неудобства мы отдадим автомобиль вам
          </p>
          <p className={classes.block_title}>
            У нас быстрое оформление, и действует скидка 10% если берешь авто больше сутки
          </p>
          <p className={classes.block_list}>
            Мы поможем вам по подобрать автомобиль по обстоятельству:
            <ul>
              <li>Авто для поездки с семьей</li>
              <li>Авто средних классов, цена+качество</li>
              <li>Есть sportCar</li>
              <li>А также для более важных встреч, у нас представительские <b>VIP</b> марки </li>
            </ul>
          </p>
          <div>
            <Button
                className={classes.pick_up}
                variant="contained"
                color="secondary"
            >
              <a className="a" href="#cars">
                Подобрать авто
              </a>
            </Button>
          </div>

        </Paper>}
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

                    <Grid item xs={4}  className={classes.gridItem}>
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
