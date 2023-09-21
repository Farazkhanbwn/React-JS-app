import React, { Component, createRef } from "react";
import CallBackRef from "./callBack-ref";

export default class RefComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };

    this.myRef = createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ value: this.myRef.current.value });
  };

  render() {
    return (
      <>
        <h2>Name: {this.state.value}</h2>
        <form onSubmit={this.handleSubmit}>
          <br></br>
          Name : <input type="text" />
          <br></br>
          <br></br>
          Password : <input type="text" ref={this.myRef} />
          <br></br>
          <br></br>
          <input type="submit" />
          <br></br>
          <br></br>
          <CallBackRef />
        </form>
      </>
    );
  }
}
