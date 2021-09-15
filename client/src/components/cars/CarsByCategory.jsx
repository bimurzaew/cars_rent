import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import "./style.css";
import { Box, Container, Grid, Toolbar } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import { NavLink } from "react-router-dom";
import LoadingCategories from "./LoadingCategories";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(15),
    width: 350,
    borderRadius: 10,
    margin: "auto",
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
  mainImg: {
    backgroundImage:
      "URL(https://i.trse.ru/2020/10/tmuR.jpg)",
    backgroundSize: "cover",
    background: "fixed",
    backgroundRepeat: "no-repeat",
    paddingBottom:15
  },
  cont: {
    marginTop: theme.spacing(10),
  },
  wid: {
    width: "100%",
  },
  nav: {
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      color: "inherit",
    },
  },
}));

function CarsByCategory(props) {
  const classes = useStyles();

  const { cars, loading } = useSelector((state) => state.cars);

  return (
    <Box className={classes.mainImg}>
      <Toolbar />
      <Container maxWidth={classes.wid} className={classes.main}>
        <Grid
          classes={classes.cont}
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          {
            loading ?
                <Grid item xs={4} className={classes.root}>
                    <LoadingCategories/> :
                </Grid> :
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
                      цена: {item.price} ₽
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Fab
                      variant="extended"
                      size="small"
                      color="primary"
                      aria-label="add"
                      className={classes.margin}
                    >
                      <NavLink className={classes.nav} to={`/cars/${item._id}`}>
                        подробнее
                      </NavLink>
                    </Fab>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default CarsByCategory;
