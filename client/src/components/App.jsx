import {BrowserRouter} from "react-router-dom";
import Cars from "./cars";
import Header from "./Header";
import SignUpPage from './auth/SignUpPage';
import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Header/>
          <Cars/>
        </Route>
        <Route path='/signup'>
          <SignUpPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );

}

export default App;
