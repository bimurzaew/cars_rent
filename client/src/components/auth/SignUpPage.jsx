import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { registerUser } from "../../redux/features/users";
import { useDispatch, useSelector } from "react-redux";
import GroupTwoToneIcon from "@material-ui/icons/GroupTwoTone";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [number, setNumber] = useState("");

  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.regError);
  const message = useSelector((state) => state.users.message);

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeMail = (e) => {
    setMail(e.target.value);
  };
  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(registerUser({ password, login, name, lastName, mail, number }));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <GroupTwoToneIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Регистрация
        </Typography>
        <Typography
          component="h1"
          variant="body2"
          color={message ? "primary" : "error"}
        >
          {message ? (
            <div>
              <span>аккаунт успешно создан</span>{" "}
              <Link variant="body2" color="secondary" href="/signIn">
                войти
              </Link>
            </div>
          ) : (
            ""
          )}
          {error}
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleChangeLastName}
                autoComplete
                name="firstName"
                variant="outlined"
                required
                fullWidth
                label="Фамилия"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                onChange={handleChangeName}
                required
                fullWidth
                label="Имя"
                autoComplete="имя"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                onChange={handleChangeMail}
                required
                fullWidth
                label="Почта"
                autoComplete="логин"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                onChange={handleChangeNumber}
                required
                fullWidth
                label="Контакт"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete
                onChange={handleChangeLogin}
                variant="outlined"
                required
                fullWidth
                label="Логин"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                onChange={handleChangePassword}
                required
                fullWidth
                label="Пароль"
                autoComplete
                type='password'
              />
            </Grid>
          </Grid>
          <Button
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Зарегистрироваться
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signIn" variant="body2">
                У вас уже есть аккаунт? Войти
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
