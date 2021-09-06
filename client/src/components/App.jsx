
import {BrowserRouter} from "react-router-dom";
import Cars from "./cars";
import Header from "./Header";

function App() {

  return (
    <BrowserRouter>
        <Header/>
        <Cars/>
    </BrowserRouter>
  );

}

export default App;
