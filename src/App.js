import React, { Component } from "react";
import Placecard from "./Components/Placecard";
import "./App.css";

class App extends Component {
  render() {
    return <Placecard ticker="AMD" company="Advanced Micro Systems" />;
  }
}

export default App;
