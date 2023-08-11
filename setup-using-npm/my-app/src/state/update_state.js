import React, { Component, Fragment } from 'react'

class Men extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "faraz",
            class: this.props.class
        }
    }
    handleClick = () => {
        this.setState({name: "Zubair"})
        // this.setState((state , props) =>{
        //     console.log("State name is = ",state.name = "Zubair");
        //     console.log("Props is = " ,props);
        // })
        // this.setState({name: "hashir",class: "Evening"})
    };
    render(){
        return <Fragment>
            <p>Hello {this.state.name}</p>
            <p>Class {this.state.class}</p>
            <button onClick={this.handleClick}>Click Me</button>
        </Fragment>
    }
}

export default Men;