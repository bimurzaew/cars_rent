import {BrowserRouter} from "react-router-dom";
import Cars from "./cars";
import Header from "./Header";
import SignUpPage from './auth/SignUpPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignInPage from './auth/SignInPage';
import { useSelector } from 'react-redux';

function App() {
  const token = useSelector(state => state.token)

    if (!token) {
      return (
        <BrowserRouter>
          <Switch>
            <Route path='/signup'>
              <SignUpPage />
            </Route>
            <Route path='/signIn'>
              <SignInPage />
            </Route>
            <Redirect path='/signup'/>
          </Switch>
        </BrowserRouter>
      )
    }else {
      return (
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Header/>
              <Cars/>
            </Route>
          </Switch>
        </BrowserRouter>
      )
    }
}

export default App;
