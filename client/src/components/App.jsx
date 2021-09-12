import { BrowserRouter } from "react-router-dom";
import Cars from "./cars";
import Header from "./Header";
import SignUpPage from "./auth/SignUpPage";
import { Switch, Route } from "react-router-dom";
import SignInPage from "./auth/SignInPage";
import FooterCars from "./Footer/FooterCars";
import PersonalPage from "./personal/PersonalPage";
import CarsByCategory from "./cars/CarsByCategory";
import CarsById from "./cars/CarById";
import "bootstrap/dist/css/bootstrap-grid.min.css";

import { More } from "@material-ui/icons";
import Car from "./cars/Car";
import AboutUs from "./Header/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
          <Cars />
        </Route>
          <Route  path="/about-us">
              <AboutUs/>
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
