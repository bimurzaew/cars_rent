
import {BrowserRouter} from "react-router-dom";
import Cars from "./cars";
import Header from "./Header";
import FooterCars from './Footer/FooterCars';

function App() {

  return (
    <BrowserRouter>
        <Header/>
        <Cars/>
        <FooterCars/>
    </BrowserRouter>
  );

}

export default App;
