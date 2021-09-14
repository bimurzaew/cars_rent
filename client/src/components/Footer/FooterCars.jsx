import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

const useStyles = makeStyles({
  footer: {
    borderBottom: "1px solid grey",
    backgroundColor: "#11314f",
    boxShadow: "inset  0 -10px 20px -10px lightcyan",
    padding: "10px 0",
  }
});

const FooterCars = () => {
  const classes = useStyles();
  return (
    <>
      <footer className={classes.footer}>
        <Container>
          <FooterTop />
          <FooterBottom />
        </Container>
      </footer>
    </>
  );
};

export default FooterCars;
