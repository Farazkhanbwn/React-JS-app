import React from "react";
import ReactDOM from "react-dom";
import Student from "./Student";
import App from "./App";
import Teacher from "./state/state";
import Employee from "./state/event_handling";
// import el from "./App";

// let el = <h1>Hello React</h1>;
// let el = React.createElement("h1" , null , "Hello Developers");

// import App from "./App";
// ReactDOM.render(<App/> , document.getElementById("root"));

// Function Example
// ReactDOM.render(<Student name = "Hamid" /> , document.getElementById("root"));

// Class Example
ReactDOM.render(<App /> , document.getElementById("root"));
// ReactDOM.render(<Teacher marks = "998"/>, document.getElementById("state"));
// ReactDOM.render(<Employee community = "community"/>, document.getElementById("test"));