import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useHistory } from "react-router-dom";
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  makeStyles,
  TextField, Toolbar,
  Typography,
} from "@material-ui/core";
import { auth } from "../../redux/features/users";

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
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignInPage(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);
  const token = useSelector((state) => state.users.token);
  const history = useHistory();

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(auth({ password, login }));
    // history.push("/personal");
  };

  return (
    <div>
      <Toolbar/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Вход
          </Typography>
          <Typography
            component="h1"
            variant="body2"
            color={error ? "primary" : "error"}
          >
            {error}
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              onChange={handleChangeLogin}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Логин"
              name="login"
            />
            <TextField
              onChange={handleChangePassword}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
            />
            <Grid container>
              <Grid item>
                <Link to="/signup" variant="body2">
                  У вас нет аккаунта? Зарегистрироваться
                </Link>
              </Grid>
            </Grid>
            <Link to='/personal'>
              <Button
                onClick={handleSubmit}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                войти
              </Button>
            </Link>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default SignInPage;