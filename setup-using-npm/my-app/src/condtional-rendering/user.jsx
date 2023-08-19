import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return <>
    <h1>Welcome Faraz</h1>
    <h3>We are at User Component</h3>
    <button onClick={this.props.clickData}>Logout</button>
    </>
  }
}
