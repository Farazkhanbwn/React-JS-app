import React, { Component } from 'react'

export default class Marks extends Component{
    constructor(props){
        super(props);
        this.state = {
            mroll : this.props.roll
        }
    }

    static getDerivedStateFromProps(props , state){
        console.log("Get Derived State From Props");
        console.log(props , state);
        if(props.roll !== state.mroll){
            return {mroll : props.roll}
        }
        return null;
    }

    render(){
        console.log("Marks Rendered [child of Student]");
        return <h1>Marks Component = {this.state.mroll}</h1>
    }
}