import React from "react";
import Grid from "@material-ui/core/Grid";
import {CardMedia, Container, Typography, Link, Box} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  footer: {
    borderBottom: "1px solid grey",
    backgroundColor: "#11314f",
    boxShadow: "inset  0 -10px 20px -10px lightcyan",
    padding:"10px 0"
  },
  title: {
    color: "#9B3C51",
  },
  list: {
    color: "white",
    fontSize: "22px",
    marginBottom: "5px",
  },
  img: {
    width: 35,
  },
  about: {
    fontSize: 25,
    color: "white",
  },
  footer_item: {
    textAlign: "center",
  },
  logo_messenger:{
    display:"flex",
    justifyContent:"space-around"
  },
  copyright:{
    color:"white",
    fontSize:15
  },
  footer_bottom:{
    alignItems:"center"
  }
});

const FooterCars = () => {
  const classes = useStyles();
  return (
    <>
      <footer className={classes.footer}>
        <Container>
          <Grid
            className={classes.flex}
            container
            xs={13}
            direction="row"
            justifyContent="center"
          >
            <Grid item xs={4} className={classes.footer_item}>
              <Link href="/about-us" className={classes.about}>
                O нас
              </Link>
            </Grid>

            <Grid item xs={4} className={classes.footer_item}>
              <Link className={classes.about}>Отзывы</Link>
            </Grid>
            <Grid item xs={4} className={classes.footer_item}>
              <Link className={classes.about}>Контакты</Link>
            </Grid>
          </Grid>
          <Grid
              container
              direction={"row"}
              justifyContent={"space-around"}
              className={classes.footer_bottom}
          >
            <Grid item xs={2}>
              <Box  className={classes.logo_messenger}>
                <Link href="https://api.whatsapp.com/send/?phone=%2B79284781016&text&app_absent=0">
                  <CardMedia
                      className={classes.img}
                      component="img"
                      image="https://prostoprokat.ru/upload/medialibrary/477/477523c8ee633564ef1892dbb69997eb.png"
                  />
                </Link>
                <Link href="https://instagram.com/intocode?utm_medium=copy_link">
                  <CardMedia
                      className={classes.img}
                      component="img"
                      image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
                  />
                </Link>
                <Link href="https://telegram.org/79284781016">
                  <CardMedia
                      className={classes.img}
                      component="img"
                      image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1200px-Telegram_2019_Logo.svg.png"
                  />
                </Link>
              </Box>
            </Grid>
            <Grid item xs={5}>
              <p className={classes.copyright}>
                Copyright © INTOCODE (Прокат авто) 2021  Все права защищены
              </p>
            </Grid>

          </Grid>
        </Container>
      </footer>
    </>
  );
};

export default FooterCars;
