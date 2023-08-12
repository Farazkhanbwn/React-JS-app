import React , {Component, Fragment} from 'react'
import Marks from './Marks';

export default class Student extends Component{
    constructor(){
        super();
        this.state = {
            roll : 101,
        }
    }
    clickHandle = () => {
        console.log("Button Clicked");
        this.setState({roll : this.state.roll * 2});
    }

    render(){
        console.log("Student - Rendered [Child of App]");
        return <Fragment>
        <h1>Kindly Give Your corrct Name {this.props.name}</h1>
        <Marks roll = {this.state.roll}/>
        <button onClick={this.clickHandle}>Change</button>
        
        </Fragment>
    }
}
