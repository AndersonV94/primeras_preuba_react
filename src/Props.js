import React, { Component } from "react";
import ReactDOM from "react-dom";

class Parametros extends Component {
  render() {
    return (
      <div id="div_listas">
        <h3>Parametros</h3>
        <h4 id="example">
          El nombre q quiera
          {this.props.name}
        </h4>
      </div>
    );
  }
}

export default Parametros;
