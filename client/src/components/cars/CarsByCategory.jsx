import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: theme.spacing(15),
  },
  media: {
    height: 100,
    backgroundSize: 200,
  },
}));

function CarsByCategory({ item }) {
  console.log(item)
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={item.image}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
          {item.name}
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          {item.desc}
        </Typography>
        <Typography variant="body2" color="secondary" component="p">
          {item.price} ₽ / в сутки
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Арендовать
        </Button>
      </CardActions>
    </Card>
  );
}

export default CarsByCategory;
