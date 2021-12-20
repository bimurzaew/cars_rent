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
<<<<<<< HEAD
    <header>
      <div className="header-blog">
        <div className="container-fluid">
          <div className="head-top">
            <div className="row text-center align-items-center">
              <div className="col">
                <img className="logo-company" style={style.logoCompany} src={logo} />
              </div>
              <div className="col-6">
                  <div className={classes.text_title}>
                    Подберем для вас автомобиль
                  </div>
              </div>
              <div className="col">
                <div className="person">
                  <div className="person-text">
                    {token ? (
                      <NavLink  variant="body2" color="secondary" to="/personal">
                        <PermIdentityTwoToneIcon className={classes.avatar} />
                      </NavLink>
                    ) : (
                      <Link variant="body2" color="secondary" to="/signIn">
                        <PermIdentityTwoToneIcon className={classes.avatar} />
                      </Link>
                    )}
                  </div>
                  <div className="logo">
                    {token ? (
                      <Link to="/">
                        <div className="exitPage" onClick={handleLogOut}>
                         <ExitToAppTwoToneIcon className={classes.avatar}/>
                        </div>
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="head-bottom">
            <div className="row justify-content-around text-center">
              <HeaderBottom />
=======
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
>>>>>>> 0948ece13c7e847a2f4e283c919836fc3b6d88c0
            </div>
        </Toolbar>
      </AppBar>
      <AutoCategories/>
    </Box>
  );
}