import { BrowserRouter } from "react-router-dom";
import Cars from "./cars";
import Header from "./Header";


import SignUpPage from "./auth/SignUpPage";
import { Switch, Route, Redirect } from "react-router-dom";
import SignInPage from "./auth/SignInPage";
import { useSelector } from "react-redux";
import FooterCars from "./Footer/FooterCars";
import PersonalPage from "./personal/PersonalPage";

import MoreCars from "./cars/MoreCars";
import CarsByCategory from "./cars/CarsByCategory";
import {More} from "@material-ui/icons";
import Car from "./cars/Car";


function App() {
  const token = useSelector((state) => state.users.token);

  return (
      <BrowserRouter>
          <Switch>


              <Route exact path="/">
                  <Header/>
                  <Cars/>
                  <FooterCars/>
              </Route>
              <Route path="/cars/category/:id">
                  <Header/>
                  <CarsByCategory/>
                  <FooterCars/>
              </Route>
              <Route path="/cars/:id">
                  <MoreCars/>
              </Route>
              {/*<Route path="/personal">*/}
              {/*    <PersonalPage/>*/}
              {/*</Route>*/}


        {/*<Redirect to='/' />*/}
      </Switch>
    </BrowserRouter>
        )

          </Switch>
          <Route path='/signIn'>
              <SignInPage/>
          </Route>
          <Route path='/signup'>
              <SignUpPage/>
          </Route>

      </BrowserRouter>
  )
}

export default App;
