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

import CarsById from "./cars/CarById";

import { More } from "@material-ui/icons";
import Car from "./cars/Car";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
          <Cars />
        </Route>
        <Route path="/cars/category/:id">
          <Header />
          <CarsByCategory />
        </Route>
        <Route path="/cars/:id">
          <Header />
          <CarsById />
        </Route>
        <Route path="/personal">
          <Header />
          <PersonalPage />
        </Route>
      </Switch>
      {/*<FooterCars />*/}

      <Route path="/signIn">
        <SignInPage />
      </Route>
      <Route path="/signup">
        <SignUpPage />
      </Route>
    </BrowserRouter>
  );
}

export default App;
