import React , {Component , Fragment} from "react";
import Student from "./Student";

class App extends Component{
    constructor(props){
        super(props);
        console.log("App - Constructor Called");
        console.log(props);
        this.state = {
            fname : "Liaquat Ali"
        }
    }

    static getDerivedStateFromProps(props , state){
        console.log("Get Derived State From Props");
        console.log(props);
        console.log(state);
        return null;
    }

    componentDidMount(){
        // Get Data from serer and set the data to state
        console.log("App - componentDidMount - Mounted");
    }

    render(){
        console.log("App - Rendered");
        return <Fragment>
            <Student name = "Numan"></Student>
        </Fragment>
    }
}
export default App;