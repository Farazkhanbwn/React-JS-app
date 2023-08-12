import React, { Component } from 'react'

export default class Marks extends Component{
    componentDidMount(){
        console.log("Marks Mounted");
    }

    componentWillUnmount(){
        console.log("Marks UnMounted");
    }

    constructor(props){
        super(props);
        console.log("Marks Constructor Called");
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

    shouldComponentUpdate(nextProps , nextState){
        if(this.state.mroll < 107){
            console.log("Mark - SholuldComponentUpdate");
            console.log(nextProps , nextState);
            return true;
        }
        console.log(nextProps , nextState);
        return false;
    }

    getSnapshotBeforeUpdate(prevProps , prevState){
        console.log("Marks - Get SnapShotBeforeUpdate . It runs before Update");
        console.log(prevProps , prevState);
        return 45;
    }

    componentDidUpdate(prevProps , prevState , snapshot){
        console.log("Marks - ComponentDidUpdate - It runs after Update");
        console.log(prevProps , prevState , snapshot)
    }

    render(){
        console.log("Marks Rendered [child of Student]");
        return <h1>Marks Component = {this.state.mroll}</h1>
    }
}