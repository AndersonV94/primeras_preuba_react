import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
//import PruebaComponente from "./PruebaComponente";
import Parametros from "./Props";
import Lista_nombres_componentes from "./ListaCompo";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Lista_nombres_componentes />
    <Parametros />
    <Lista_nombres_componentes />
  </React.StrictMode>,
  rootElement
);
ReactDOM.render(
  <Parametros name=" Taylor" />,
  document.getElementById("div_listas")
);
