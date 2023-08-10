import React , {Component} from "react";

// const Value = props => {
//     return <h1>Hello Software Engineers From {props.children}</h1>
// }

class Value extends Component{
    render(){
        return <h1>Hello Software Engineers From {this.props.children}</h1>
    }
}

export default Value;