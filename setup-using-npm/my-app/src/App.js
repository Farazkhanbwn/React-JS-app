import React , {Component , Fragment} from "react";
import Student from "./Student";

class App extends Component{
    componentDidMount(){
        console.log("App Mounted");
    }

    componentWillUnmount(){
        console.log("App UnMounted");
    }

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

    render(){
        console.log("App - Rendered");
        return <Fragment>
            {/* <h1>We are Learning at IUB</h1> */}
            <Student name = "Numan"></Student>
        </Fragment>
    }
}
export default App;