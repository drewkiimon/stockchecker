import React, { Component } from "react";
import Placecard from "./Components/Placecard";
import "./App.css";

class App extends Component {
  render() {
    var stockList = this.props.stocks.map(stock => {
      return <Placecard ticker={stock.ticker} company={stock.company} />;
    });

    return (
      <div>
        <h1>Stocks</h1>
        <ul>{stockList}</ul>
      </div>
    );
  }
}

App.defaultProps = {
  stocks: [
    {
      ticker: "AMD",
      company: "Advanced Micro Devices"
    },
    {
      ticker: "SQ",
      company: "Square Inc."
    },
    {
      ticker: "PYPL",
      company: "Paypal Holdings"
    }
  ]
};

export default App;
