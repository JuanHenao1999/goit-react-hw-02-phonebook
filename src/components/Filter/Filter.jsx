import React, { Component } from "react";
import PropTypes from 'prop-types';

export class Filter extends Component {

  setFilterValue = event => {
    let value = event.currentTarget.value.toUpperCase();
    this.props.setFilterToState(value);
  };

  render() {
    return (
      <div>
        <label>Find contacts by name</label>
        <br/>
        <input onChange={this.setFilterValue}></input>
      </div>
    );
  }
}

Filter.propTypes = {
  setFilterToState: PropTypes.func.isRequired,
};
