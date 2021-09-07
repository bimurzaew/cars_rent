import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: theme.spacing(15),
  },
  media: {
    height: 100,
    backgroundSize: 200,
  },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    margin: {
        margin: theme.spacing(1),
    },
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
        </Button> /
          <Fab
              variant="extended"
              size="small"
              color="primary"
              aria-label="add"
              className={classes.margin}
          >
              <NavigationIcon className={classes.extendedIcon} />
              Extended
          </Fab>
      </CardActions>
    </Card>
  );
}

export default Car;
