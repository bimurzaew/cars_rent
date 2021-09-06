import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  Link, makeStyles,
  TextField,
  Typography
} from '@material-ui/core';
import { registerUser } from '../../redux/features/users';

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

function SignUpPage(props) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [lastName, setLastName] = useState('')

  const loading = useSelector(state => state.loading)
  const error = useSelector(state => state.error)
  const message = useSelector(state => state.message)


  const handleChangeLogin = ((e) => {
    setLogin(e.target.value)
  })
  const handleChangePassword = ((e) => {
    setPassword(e.target.value)
  })

  const handleSubmit = () => {
    dispatch(registerUser({password,login,name, lastName}))
  }

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Регистрация
          </Typography>
          <Typography
            component="h1"
            variant="body2"
            color={message ? 'primary' : 'error'}
          >
            {message ? <div><span>аккаунт успешно создан</span> <Link variant='body2' color='secondary' href='signIn'>войти</Link></div> : ''}
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
                <Link href="/signup" variant="body2">
                  У вас уже есть аккаунт?
                </Link>
              </Grid>
            </Grid>
            <Button
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={loading}
            >
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default SignUpPage;