import React, { Component } from "react";
import Placecard from "./Components/Placecard";
import "./App.css";

// https://www.rithmschool.com/courses/react-fundamentals/state

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    setTimeout(this.addStock.bind(this), 5000);
  }

  addStock() {
    const newStocks = this.state.stocks.slice();
    newStocks.push({ ticker: "FB", company: "Facebook" });
    this.setState({ stocks: newStocks });
  }

  render() {
    var stockList = this.state.stocks.map(stock => {
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

export default App;
