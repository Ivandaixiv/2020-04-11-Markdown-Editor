import HTMLInput from "./HTMLInput";
import React, { Component } from "react";

export default class HTMLInputContainer extends Component {
  render() {
    return (
      <div>
        <HTMLInput setInput={this.props.setInput} />
      </div>
    );
  }
}
