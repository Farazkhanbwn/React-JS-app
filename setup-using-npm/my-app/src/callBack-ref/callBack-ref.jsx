import React, { Component } from "react";

export default class CallBackRef extends Component {
  constructor(props) {
    super(props);
    this.myRef = null;
    this.setRef = (value) => {
      this.myRef = value;
    };
  }

  componentDidMount = () => {
    if (this.myRef) {
      this.myRef.focus();
    }
  };

  render() {
    return (
      <>
        <h3>Learning CallBack Ref</h3>
        <form>
          input : <input type="text" />
          <br></br>
          <br></br>
          password : <input type="text" ref={this.setRef} />
          <br></br>
          <br></br>
          Address : <input type="text" />
          <br></br>
          <br></br>
        </form>
      </>
    );
  }
}
