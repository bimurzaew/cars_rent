import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Box, CardMedia, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  logo_messenger:{
    display:"flex",
    justifyContent:"space-around"
  },
  copyright:{
    color:"white",
    fontSize:15
  },
  footer_bottom:{
    alignItems:"center",
    marginTop:25,
    justifyContent:'space-between'
  },
  img: {
    width: 35,
  },
})

function FooterBottom(props) {
  const classes = useStyles()
  return (
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
  );
}

export default FooterBottom;