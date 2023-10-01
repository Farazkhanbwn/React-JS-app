import { useContext } from "react";
import { MyContext } from "./context";
import styles from "./context-api.module.css";

function Child(props) {
  let context = useContext(MyContext);
  console.log("context is = " + context.name);
  // let [name, subject, contact] = context;
  return (
    <>
      <h1>Child Componenet</h1>
      {/* <Consumer>
        {({ fName, clickButton }) => (
          <>
            <h3>
              Name :{fName.name} Class : {fName.class}
            </h3>
            <button onClick={clickButton}>click Here</button>
          </>
        )}
      </Consumer> */}
      <>
        <div className={styles.main}>
          <h1 className={styles.headingPrimary}>Teacher : {context.name}</h1>
          <h2>Suject : {context.subject}</h2>
          <h3>Contact : {context.contact}</h3>
        </div>

        {/* <button onClick={context.clickButton}>click Here</button> */}
      </>
    </>
  );
}

export default Child;
