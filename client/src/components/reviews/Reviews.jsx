import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReview, getReviews } from "../../redux/features/reviews";
import Button from "@material-ui/core/Button";
import {Box, Container, makeStyles, Paper, TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
  title: {
    color: "#33325E",
    margin: "50px 0px 30px"
  },
  subTitle: {
    color: "#525F82",
    fontSize: "20px"
  },
  subbTitle: {
    marginTop: "30px",
    color: "#525F82",
    fontSize: "30px"
  },
  blockReviews: {
    margin: "30px 300px 0",
    background: "#F6F4F5"
  },
  reviews: {
    height: "150px"
  },
  formBtn: {
    marginLeft: "20px"
  },
  todoText: {
    margin: "20px",
    background: "white",
    padding: "20px"
  },
  container: {
    background: "#F6F4F5"
  }
})


function Reviews() {
  const classes = useStyles()

  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleChangeText = (e) => {
    e.preventDefault()
    setText(e.target.value);
  };

  const addRecall = () => {
    dispatch(addReview( text ));
  };

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);
  const recall = useSelector((state) => state.reviews.recall);

  return (

      <Container className={classes.container}>
        <Box>
          <Typography className={classes.title} gutterBottom variant="h5">
            Отзывы наших клиентов об аренде автомобилей
          </Typography>
          <Typography className={classes.subTitle} gutterBottom component="p">
            Наша компания «Просто Прокат» стремится быть лучшей, поэтому мы не скрываем то,
            что думают о нас наши клиенты. Благодаря Вашим отзывам мы можем своевременно исправлять возникающие недочеты,
            и открыто продемонстрировать наш уровень обслуживания. Оставьте отзыв об опыте работы с нами.
          </Typography>
        </Box>
        <Container>
          <Box>
            {recall?.map((item) => {
              return (
                  <Box>
                    <Typography variant="h6" component="p" className={classes.todoText}>{item.text}</Typography>
                  </Box>
              )
            })}
          </Box>
          <Paper className={classes.reviews} elevation={6}>
            <Box className={classes.blockReviews}>
              <Typography className={classes.subbTitle} gutterBottom variant="h5">
                Оставьте отзыв о нашей компании
              </Typography>
              <form action="">
                <TextField variant="outlined" onChange={(e) => handleChangeText(e)} type="text" />
                <Button className={classes.formBtn} onClick={addRecall}   variant="contained" size="large" color="primary">
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
