import React, { Component } from "react";
import ReactDOM from "react-dom";

class Lista_nombres_componentes extends Component {
  render() {
    return (
      <div>
        <h3>Un componente</h3>
        <p>Un fragmento de la interfaz reutilizable</p>
        <ul>
          <li>Luis</li>
          <li>Alfonoso</li>
          <li>julieta</li>
        </ul>
      </div>
    );
  }
}

export default Lista_nombres_componentes;
