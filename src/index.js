import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";

import { Registration } from "./store";

import App from "./components/App";
import "./index.scss";
// import { Registration } from './store/authStore';

const storeRegistarion = new Registration();

ReactDOM.render(
  <Provider storeRegistarion={storeRegistarion}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
