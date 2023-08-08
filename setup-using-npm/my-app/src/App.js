import React , {Component , Fragment} from "react";
import Student from "./Student";

// class App extends Component{
//     render(){
//         // return React.createElement("h1" , null , "Hello Flate mates");

//         // Frangment
//         return (<>
//         <h1>Hello React developers from Pakistan</h1>
//         <h2>Pakistan is the largest country</h2>
//         <p>We are Learning React</p>
//         </>);
//     }
// }

const App = () =>{
    return (
        <div>
            <Student name = "faraz"/>
            <Student name = "Hanzala"/>
            <Student name = "Hashir"/>
        </div>
    )
}
export default App;