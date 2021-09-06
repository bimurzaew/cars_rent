import React from "react";
import Grid from "@material-ui/core/Grid";
import { CardMedia, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({


flex: {
  display: "flex",
  justifyContent: "space-between"
},
  footer: {
    background: "black;"
  },
  title: {
 color: "#9B3C51",
  },
  list: {
    color: "white",
    fontSize: "22px",
    marginBottom: "5px"
  },
  img: {
  width: "250px",
  height: "322px"
  },

});

const FooterCars = () => {
  const classes = useStyles();
  return (
    <>
      <footer className={classes.footer}>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <Container>
          <Grid className={classes.flex} container xs={12}>

            <Grid item xs={2}>
              <Typography
                className={classes.title}
                variant="h4"
                gutterBottom
                color="black"
              >
                Автопарк
              </Typography>


              <Typography className={classes.list} variant="h6">
                Эконом-класс
              </Typography>
              <Typography className={classes.list} variant="h6">
                Средний-класс
              </Typography>
              <Typography className={classes.list} variant="h6">
                Бизнес-класс
              </Typography>
              <Typography className={classes.list} variant="h6">
                Внедорожники
              </Typography>
              <Typography className={classes.list} variant="h6">
                Коммерческие
              </Typography>
              <Typography className={classes.list} variant="h6">
                Vip-авто
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography
                className={classes.title}
                variant="h4"
                component="div"
                gutterBottom
              >
               Услуги
              </Typography>

              <Typography className={classes.list} variant="h6">
                Аренды авто с выкупом
              </Typography>
              <Typography className={classes.list} variant="h6">
                Долгосрочная аренда авто
              </Typography>
              <Typography className={classes.list} variant="h6">
               Аренды авто в аэропорту Москвы
              </Typography>
              <Typography className={classes.list} variant="h6">
                Пусуточная аренда
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography className={classes.title} variant="h4" gutterBottom component="div">
                Условия
              </Typography>


              <Typography className={classes.list} variant="h6">
                Цены
              </Typography>
              <Typography className={classes.list} variant="h6">
                Прокат авто без залога
              </Typography>
              <Typography className={classes.list} variant="h6">
                Мошенникам
              </Typography>
              <Typography className={classes.list} variant="h6">
                Юридическим лицам
              </Typography>
              <Typography className={classes.list} variant="h6">
                Вопрос-ответ
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography className={classes.title} variant="h4" gutterBottom component="div">
                Контакты
              </Typography>

              <Typography className={classes.list} variant="h6">
                Адрес и  телефоны
              </Typography>
              <Typography className={classes.list} variant="h6">
               Связь с директором
              </Typography>
              <Typography className={classes.list} variant="h6">
                Сотрудничество
              </Typography>
            </Grid>
            <Grid item xs={2} className={classes}>
              <CardMedia className={classes.img} image="https://st2.depositphotos.com/2172301/6557/v/600/depositphotos_65575193-stock-illustration-vector-template-of-car-rental.jpg"/>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  );
};

export default FooterCars;
