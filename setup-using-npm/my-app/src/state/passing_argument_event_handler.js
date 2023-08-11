import React, { Component } from 'react'

class Data extends Component{

    state = {
        id : 1,
        name : "faraz",
        roll : this.props.roll
    };

    handleClick = (id , e) =>{
        console.log(id);
        console.log(e);
    }

    // handleClickArg = e => {
    //     this.handleClick(this.state.id , e)
    // }

    render(){
        return <div>
            <h1>I are beginner says {this.state.name} and my roll no is {this.state.roll}</h1>
            {/* <button onClick={this.handleClick.bind(this , this.state.id)}>Delete</button> */}
            {/* <button onClick={e => {
             this.handleClick(this.state.id , e)
                }}>Delete</button> */}
            {/* <button onClick={this.handleClickArg}>Delete</button> */}
        </div>
    }
}
export default Data;