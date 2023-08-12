import React , {Component, Fragment} from 'react'
import Marks from './Marks';

export default class Student extends Component{
    componentDidMount(){
        console.log("Student Mounted");
    }

    componentWillUnmount(){
        console.log("Student UnMounted");
    }

    constructor(){
        super();
        console.log("Student - Constructor Called");
        this.state = {
            roll : 101,
        }
    }
    clickHandle = () => {
        console.log("Button Clicked");
        this.setState({roll : this.state.roll + 2});
    }

    render(){
        console.log("Student - Rendered [Child of App]");
        return <Fragment>
            {/* <h1>Pakistan is the Largest country all over the world</h1> */}
        <h1>Kindly Give Your corrct Name {this.props.name}</h1>
        <Marks roll = {this.state.roll}/>
        <button onClick={this.clickHandle}>Change</button>
        
        </Fragment>
    }
}
