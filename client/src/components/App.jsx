import {BrowserRouter} from "react-router-dom";
import Cars from "./cars";
import Header from "./Header";

import SignUpPage from './auth/SignUpPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignInPage from './auth/SignInPage';
import { useSelector } from 'react-redux';
import FooterCars from './Footer/FooterCars';

function App() {
  const token = useSelector(state => state.users.token)
  console.log(token)
  return (
          <BrowserRouter>
            <Switch>
              <Route path='/signup'>
                <SignUpPage />
              </Route>
              <Route exact path='/'>
                <Header />
                <Cars />
                <FooterCars />
              </Route>
              <Route path='/signIn'>
                <SignInPage />
              </Route>
              <Redirect to='/' />
            </Switch>
          </BrowserRouter>
        )
  //     if (!token) {
  //       return (
  //         <BrowserRouter>
  //           <Switch>
  //             <Route path='/signup'>
  //               <SignUpPage />
  //             </Route>
  //             <Route path='/signIn'>
  //               <SignInPage />
  //             </Route>
  //             <Redirect to='/signIn'/>
  //           </Switch>
  //         </BrowserRouter>
  //       )
  //     }else {
  //       return (
  //         <BrowserRouter>
  //           <Switch>
  //             <Route exact path='/'>
  //               <Header token='token'/>
  //               <Cars token='token'/>
  //             </Route>
  //             <Redirect to='/'/>
  //           </Switch>
  //         </BrowserRouter>
  //       )
  //     }
}

export default App;
