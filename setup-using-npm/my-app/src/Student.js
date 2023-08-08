// function Student(props){
//     return <h1>We are at Lahore person {props.name}</h1>
// }

import { Component } from "react";

// function ES6
const Student = (props) => {
    return <h1>My Name is {props.name}</h1>
}

// simple
// function Student (props){
//     return <h1>We are at Lahore person {props.name}</h1>
// }

// Class Example

// class Student extends Component{
//     render(){
//         return <h1>My name is {this.props.name}</h1>
//     }
// }

export default Student;