import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles({
  about: {
    fontSize: 25,
    color: "white",
    textDecoration:"none",
    "&:hover":{
      color:"#7f2626",
      textDecoration:"none",
      transition:".5s"
    }
  },
  aboutActive:{
    color:"#7f2626",
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
        <NavLink to="/about-us" className={classes.about} activeClassName={classes.aboutActive}>
          O нас
        </NavLink>
      </Grid>

      <Grid item xs={4} className={classes.footer_item}>
        <NavLink to="/review" className={classes.about} activeClassName={classes.aboutActive}>
          Отзывы
        </NavLink>
      </Grid>
      <Grid item xs={4} className={classes.footer_item}>
        <NavLink to="/contacts" className={classes.about} activeClassName={classes.aboutActive}>
          Контакты
        </NavLink>
      </Grid>
    </Grid>
  );
}

export default FooterTop;
