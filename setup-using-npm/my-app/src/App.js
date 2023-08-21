import React, { Component, Fragment } from "react";
import Student from "./Student";
import Alert from "./alert/alert.jsx";
import color from "./shared/theme/colors";
import AlertType from "./alert/alert-types";

class App extends Component {
  componentDidMount() {
    console.log("App Mounted");
  }

  componentWillUnmount() {
    console.log("App UnMounted");
  }

  constructor(props) {
    super(props);
    console.log("App - Constructor Called");
    console.log(props);
    this.state = {
      fname: "Liaquat Ali",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Get Derived State From Props");
    console.log(props);
    console.log(state);
    return null;
  }

  render() {
    console.log("App - Rendered");
    return (
      <Fragment>
        <Alert
          type={AlertType.primary}
          title="Well Done !"
          text="This is primary alert and we are learning"
        />
        <h1 style={{ color: `${color.success}` }}>We are Learning at IUB</h1>
        <Student name="Numan"></Student>
      </Fragment>
    );

    // return <Parent>
    //     <Child/>
    //     </Parent>
  }
}
export default App;
