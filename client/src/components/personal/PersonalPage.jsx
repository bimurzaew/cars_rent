import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Grid, Toolbar } from "@material-ui/core";
import { deleteAccount, getUser } from "../../redux/features/users";
import CarByPerson from "./CarByPerson";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  boxImg:{
    backgroundImage:
        "URL(https://i.trse.ru/2020/10/tmuR.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    background: "fixed",
    height:"100vh",
    paddingBottom: 15,
  },

  root: {
    marginTop: 150,
    justifyContent: "space-evenly",
  },
  card:{
    width:400
  },
  media: {
    height: 360,
  },
  button: {
    margin: theme.spacing(1),
  },
  person:{
    color:"white"
  }
}));
function PersonalPage() {
  const dispatch = useDispatch();
  const history = useHistory()
  useEffect(() => {
    dispatch(getUser());
  }, []);

  const handleDelete = () => {
    dispatch(deleteAccount());
    history.push('/')
  };
  const { user } = useSelector((state) => state.users);
  const token = useSelector((state) => state.users.token);
  const classes = useStyles();
  return (

    <Box className={classes.boxImg}>
      <Container >
        <Toolbar />
        <Box >
          <Grid container xs={20} className={classes.root}>
            <Grid item xs={3}>
              <CardMedia
                  className={classes.media}
                  image="https://seeding.com.ua/wp-content/uploads/2017/04/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%BE%D1%82%D0%B7%D1%8B%D0%B2%D0%BE%D0%B2.jpg"
                  title="Contemplative Reptile"

              />
            </Grid>
            <Grid />
            <Grid item xs={3}>

              <Typography
                  gutterBottom
                  variant="h5"
                  component="p"
                  className={classes.person}
              >
                <b>Фамилия</b>: {user?.lastName}
              </Typography>
              <Typography
                  gutterBottom
                  variant="h5"
                  component="p"
                  className={classes.person}
              >
                <b>Имя</b>: {user?.name}
              </Typography>
              <Typography
                  gutterBottom
                  variant="h5"
                  component="p"
                  className={classes.person}
              >
                <b>Почта</b>:{user?.mail}
              </Typography>
              <Typography
                  gutterBottom
                  variant="h5"
                  component="p"
                  className={classes.person}
              >

                <b>Контакты</b>:{user?.number}
              </Typography>
              <Typography>
                <Button

                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={handleDelete}

                >
                  Delete account
                </Button>
              </Typography>
            </Grid>

            {user?.carRent? <Grid item xs={2}>
              <CarByPerson user={user}/>
            </Grid> : ''}
          </Grid>
        </Box>
      </Container>
    </Box>

  );
}

export default PersonalPage;
