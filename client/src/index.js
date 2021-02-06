import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";

import stores from "./store";

import App from "./components/App";
import "./index.scss";

ReactDOM.render(
  <Provider store={stores}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
