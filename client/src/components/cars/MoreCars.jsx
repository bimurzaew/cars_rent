
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { getCarsByID } from "../../redux/features/cars";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Box
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({

  card: {
    marginTop: "40px",
    width: "300px",
    height: "350px"
  },
  medImg: {
    height:"150px"
  },

  equipment: {
    fontFamily: "Georgia, sans-serif",
    fontSize: "21px",
    lineHeight: "25px"
  },
  detailedDescription: {
    fontFamily: 'PT Root UI, sans-serif',
    lineHeight: "25px"
  },
  boxDesc: {
    marginTop: "50px"
  }
})

function MoreCars() {
  const classes = useStyles();
  const { cars } = useSelector((state) => state.cars);
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => dispatch(getCarsByID(id)), []);



  return (
    <>
      {cars.map(item => {
          return (
            <Container className={classes}>


              <Grid container xs={12}>


                <Grid item>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.medImg}
                      image={item.image}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="h2">
                        {item.name}
                      </Typography>
                      <Typography variant="body1" color="textPrimary" component="p">
                        Год выпуска: {item.year}
                      </Typography>
                      <Typography variant="body1" color="textPrimary" component="p">
                        {item.desc}
                      </Typography>
                      <Typography variant="body1" color="secondary" component="p">
                        {item.price} ₽ / в сутки
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="medium" color="primary">
                        Арендовать
                      </Button>
                    </CardActions>
                  </Card>

                </Grid>
              </Grid>

              <Box className={classes.boxDesc}>
                <Grid item className={classes.equipment}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Комплектация:
                  </Typography>
                  {item.equipment}
                </Grid>
              </Box>

              <Box className={classes.boxDesc}>
                <Typography gutterBottom variant="h6" component="h2">
                  Детальное  описание:
                </Typography>
                <Container className={classes.detailedDescription}>
                  {item.detailedDescription}
                </Container>

              </Box>
            </Container>
          )

        }
      )}


    </>
  );
}

export default MoreCars;
