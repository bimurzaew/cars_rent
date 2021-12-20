import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import logo from "../../logo2.png";
import style from "./header.module.css";
import { useSelector } from 'react-redux'
import { Link, useHistory } from "react-router-dom";
import ModalLogOut from './ModalLogOut';
import AutoCategories from './AutoCategories'


export default function Header() {
  const token = useSelector(state => state.users.token);
  const history = useHistory();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{maxWidth:"100%"}} lg={{maxWidth:"100%"}} md={{maxWidth:"100%"}}>
        <Toolbar
          className={style.header}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Link to='/'>
              <img className={style.logo_company}  src={logo}  alt=''/>
            </Link>
          </IconButton>
          <Typography variant="h6" className={style.rent_text} component="div" sx={{ flexGrow: 1 }}>
            Аренда авто по всей России
          </Typography>
            <div
              className={style.page_logOut}
            >
              <IconButton
                    title={token ? "Личный кабинет" : "Авторизоваться"}
                    onClick={()=> history.push(token? "/personal":"/signIn") }
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
              {token && <ModalLogOut/>}
            </div>
        </Toolbar>
      </AppBar>
      <AutoCategories/>
    </Box>
  );
}

