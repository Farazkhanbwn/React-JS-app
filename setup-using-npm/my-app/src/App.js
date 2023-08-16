import React , {Component , Fragment} from "react";
import Student from "./Student";
import User from "./condtional-rendering/user";
import Guest from "./condtional-rendering/guest";
import Map from "./condtional-rendering/map";

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
            isLoggedIn : false
        }
    }

    static getDerivedStateFromProps(props , state){
        console.log("Get Derived State From Props");
        console.log(props);
        console.log(state);
        return null;
    }

    clickLogin = () =>{
        this.setState({isLoggedIn : true})
    }

    clickLogedout = () =>{
        this.setState({isLoggedIn : false})
    }

    render(){
        console.log("App - Rendered");
        let consumer = this.state.isLoggedIn;
        // If Conditon
        // if(consumer){
        //     return <User name = "faraz" clickData = {this.clickLogedout}/>
        // }
        return <Fragment>
            {consumer ? <User clickData = {this.clickLogedout}/> :<Guest clickData = {this.clickLogin} />}
            {/* {consumer && <User /> && <Guest />} */}
            {/* <h1>We are Learning at IUB</h1> */}
            <Student name = "Numan"></Student>
            <Map />
        </Fragment>
        // return <div>
        //     /* IIFE Concept That call Yourself *
        //     {(() =>{
        //         if (consumer){
        //             return <User clickData = {this.clickLogedout}/>
        //         }
        //         return <Guest clickData = {this.clickLogin}/>
        //     })()}
        // </div>
    }
}
export default App;