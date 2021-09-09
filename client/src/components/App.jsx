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


function App() {

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
              <Route path="/personal">
                  <Header />
                  <PersonalPage/>
                  <FooterCars />
              </Route>
         </Switch>
          <Route path='/signIn'>
              <SignInPage/>
          </Route>
          <Route path='/signup'>
              <SignUpPage/>
          </Route>
        <Redirect to='/' />
    </BrowserRouter>
        )
}

export default App;
