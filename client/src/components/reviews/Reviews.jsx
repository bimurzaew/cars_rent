import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReview, getReviews } from "../../redux/features/reviews";
import Button from "@material-ui/core/Button";
import {
  Box,
  Container,
  makeStyles,
  Paper,
  TextField,
  Toolbar,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import logo from "./logo-people.png";
import CircularStatic from './Preload';
import CustomizedProgressBars from './Preload';


const useStyles = makeStyles({
  title: {
    color: "#33325E",
    margin: "50px 0px 30px",
  },
  titles:{
    marginTop:100
  },
  subTitle: {
    color: "#525F82",
    fontSize: "20px",

    textAlign:'center',
    marginTop:70

  },
  subbTitle: {
    marginTop: "30px",
    color: "#525F82",
    fontSize: "30px",
    textAlign:'center'
  },
  blockReviews: {
    margin: "50px 300px 0",
    background: "#F6F4F5"
  },
  reviews: {
    height: "150px",
  },
  formBtn: {
    marginLeft: "20px",
  },
  todoText: {
    margin: "40px",
    background: "white",
    padding: "20px",
    borderBottom: "1px solid black",
  },
  container: {
    background: "#F6F4F5",
    marginTop: 100,
  },
  logo: {
    width: 25,
    marginRight: 10,
  },
});

function Reviews() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleChangeText = (e) => {

    setText(e.target.value);
  };

  const addRecall = (e) => {
    dispatch(addReview( text ))
  };

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);
  const recall = useSelector((state) => state.reviews.recall);
  const loading = useSelector(state => state.reviews.loading)
  const error = useSelector(state => state.reviews.error)
  return (

        <Container className={classes.container}>
          {loading ? <CustomizedProgressBars /> : ''}
        <Box className={classes.titles}>
          <Typography className={classes.subTitle} gutterBottom component="p" >
            Рез валахь цхьаъ яз е, вацахь охь г1о!!!

          </Typography>
        </Box>
        <Container>
          <Box>

            {recall?.map((item) => {
              return (
                  <Box>
                    <Typography variant="h6" component="p" className={classes.todoText}>{item.userId.name}: {item.text}</Typography>
                  </Box>
              )
            })}
          </Box>
          <Paper className={classes.reviews} elevation={6}>
            <Box className={classes.blockReviews}>
              {error ? <Typography>{error}</Typography> : ''}
              <Typography className={classes.subbTitle} gutterBottom variant="h5">
                Оставить отзыв
              </Typography>
              <form action="">
                <TextField variant="outlined" onChange={(e) => handleChangeText(e)} type="text" />
                <Button  className={classes.formBtn} onClick={addRecall}   variant="contained" size="large" color="primary">
                  Добавить
                </Button>
              </form>
            </Box>
          </Paper>
        </Container>
      </Container>
  );
}

export default Reviews;
