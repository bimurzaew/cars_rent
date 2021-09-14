import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import { NavLink } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: theme.spacing(5),
    width: 350,
    margin: "auto",
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
    nav:{
      color:"inherit",
        textDecoration:"none",
        "&:hover":{
          color:"inherit"
        }
    }
}));

function Car({ item }) {
  const classes = useStyles();


  return (

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
                      <NavLink className={classes.nav} to={`/cars/${item._id}`}>подробнее</NavLink>
                  </Fab>
              </CardActions>
          </Card>
  );
}

export default Car;
