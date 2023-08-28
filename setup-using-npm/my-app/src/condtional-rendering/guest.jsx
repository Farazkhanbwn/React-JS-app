import React, { Component } from "react";

export default class Guest extends Component {
  render() {
    return (
      <>
        <h3>We are at Guest testing</h3>
        <p>Hello Developers Community</p>
        <button onClick={this.props.clickData}>Login</button>
        <button>Sign Up</button>
      </>
    );
  }
}
