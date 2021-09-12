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

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/">
          <Cars />
        </Route>
        <Route path="/cars/category/:id">
          <CarsByCategory />
        </Route>
        <Route path="/cars/:id">
          <CarsById />
        </Route>
        <Route path="/personal">
          <PersonalPage />
        </Route>
      </Switch>

      <Route path="/signIn">
        <SignInPage />
      </Route>
      <Route path="/signup">
        <SignUpPage />
      </Route>
        {/*<FooterCars />*/}

    </BrowserRouter>
  );
}

export default App;
