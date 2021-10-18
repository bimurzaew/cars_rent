import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "./redux/configureStore";
import {CssBaseline} from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <CssBaseline/>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
