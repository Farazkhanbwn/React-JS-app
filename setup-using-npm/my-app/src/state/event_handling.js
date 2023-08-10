import React, { Component } from 'react'

// event handling using class
// class Employee extends Component{
//     constructor(props){
//         super(props);
//         this.state= {
//             name: "Abdul Moeez",
//             marks: this.props.marks
//         }
//         // this.handleClick = this.handleClick.bind(this);
//     }
//     // Using Arrow Function
//     handleClick = () => {
//         console.log("Button Clicked" , this)
//     }
//     render(){
//         return <div>

//             <h1>we are learning at {this.props.name}</h1>

//             <h1>Hello Events {this.state.name} . Your marks is {this.props.marks}</h1>
//             <button onClick={this.handleClick}>Click Me</button>
//         </div>
//     }
// }

const Employee = (props) => {
    const handleClick = (e) =>{
        e.preventDefault();
        console.log("Button Clicked");
    }
    return (<div>
        <h3>Hello Developers {props.community}</h3>
        <a href='https://github.com/' onClick={handleClick}>Click me</a>
        {/* <button onClick={handleClick}>Click me</button> */}
    </div>)
}
export default Employee;