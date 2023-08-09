// import React from "react";
import ReactDOM from "react-dom";
import Student from "./Student";
import App from "./App";
import Exression from "./Js_expression/js_expression";
import Person from "./Js_expression/js_expression";
import Value from "./Js_expression/JSX_children";
import React from "react";
// import el from "./App";

// let el = <h1>Hello React</h1>;
// let el = React.createElement("h1" , null , "Hello Developers");

// import App from "./App";
// ReactDOM.render(<App/> , document.getElementById("root"));

// Function Example
// ReactDOM.render(<Student name = "Hamid" /> , document.getElementById("root"));

// Class Example
ReactDOM.render(<App /> , document.getElementById("root"));
ReactDOM.render(<Exression name="Numan" marks = {100 + 3}/> , document.getElementById("expression"));
ReactDOM.render(<Value>Lahore</Value> , document.getElementById("testing"));
// ReactDOM.render(<Person /> , document.getElementById("testing"));
