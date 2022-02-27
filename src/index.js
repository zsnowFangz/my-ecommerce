import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/boxicons/css/boxicons.min.css";

import { store } from "./redux/store";
import { Provider } from "react-redux";

import Layout from "./components/Layout";
import "./sass/index.scss";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
