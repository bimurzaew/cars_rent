import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  about: {
    fontSize: 25,
    color: "white",
  },
  footer_item: {
    textAlign: "center",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
});

function FooterTop(props) {
  const classes = useStyles();
  return (
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
        <Link href="/review" className={classes.about}>
          Отзывы
        </Link>
      </Grid>
      <Grid item xs={4} className={classes.footer_item}>
        <Link href="/contacts" className={classes.about}>
          Контакты
        </Link>
      </Grid>
    </Grid>
  );
}

export default FooterTop;
