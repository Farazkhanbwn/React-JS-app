import React, { Component } from 'react'

export default class Map extends Component {
  state = {users: [
    {id : 101 , name : "Hanzala" , password : 123},
    {id : 102 , name : "Asim" , password : 125},
    {id : 103 , name : "Zubair" , password : 127},
  ]}
  render() {
    const arr = [10 , 20 , 40 , 50]
    // let result = arr.map((x) =>{
    //   return <li>{x}</li>;
    // });
    // console.log("old array" , arr);
    // console.log("New array" , result);
    return (
      <div>
        <ul>{arr.map((x)=>{return <li>{x}</li>})}</ul>
        <h3>{this.state.users.map((x) => {
          return <div key={x.id}>Name : {x.name} Id: {x.id} password : {x.password}</div>
        })}</h3>
      </div>
    )
  }
}