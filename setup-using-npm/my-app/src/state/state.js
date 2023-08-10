import React, { Component } from 'react'

// without Constructor
// class Teacher extends Component {
//     state = {
//         name : "Abdul Rehman",
//         marks : this.props.marks
//     }

//     render(){
//         return <div>
//             <h1>Hello Boy {this.state.name}</h1>
//             <h2>Your Marks of FSC is {this.state.marks}</h2>
//         </div>
//     }
// }

// with Constructor
class Teacher extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : "Mehmood Amir",
            marks : this.props.marks
        }
    }
    render(){
        return <div>
            <h1>Hello Boy {this.state.name}</h1>
            <h2>Your Marks of FSC is {this.state.marks}</h2>
        </div>
    }
}

export default Teacher;