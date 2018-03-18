import React, { Component } from "react";

class Placecard extends Component {
  render() {
    return (
      <div>
        <h1>${this.props.ticker}</h1>
        <h2>{this.props.company}</h2>
      </div>
    );
  }
}

export default Placecard;
