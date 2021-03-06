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
import AboutUs from "./about/AboutUs";
import CarsByBrands from "./cars/CarsByBrands";
import Contacts from "./contacts/Contacts";
import Reviews from "./reviews/Reviews";

function App() {
  return (
    <BrowserRouter>
      <div className="container-body">
        <Switch>
          <Route exact path="/">
            <Header />
            <Cars />
            <FooterCars />
          </Route>
          <Route path="/about-us">
            <Header />
            <AboutUs />
            <FooterCars/>
          </Route>
          <Route path="/contacts">
            <Header/>
            <Contacts />
            <FooterCars/>
          </Route>
          <Route path="/review">
            <Header/>
            <Reviews />
            <FooterCars/>
          </Route>
          <Route path="/cars/category/:id">
            <Header />
            <CarsByCategory />
            <FooterCars />
          </Route>
          <Route path="/cars/brand/:id">
            <Header />
            <CarsByBrands />
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
      </div>
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
