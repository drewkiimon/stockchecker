import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Placecard.css";

class Placecard extends Component {
  render() {
    return (
      <div className="peachy">
        <h1>${this.props.ticker}</h1>
        <h2>{this.props.company}</h2>
      </div>
    );
  }
}

Placecard.PropTypes = {
  ticker: PropTypes.string,
  company: PropTypes.string
};

export default Placecard;
