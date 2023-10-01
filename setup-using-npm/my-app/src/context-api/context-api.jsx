import { useState } from "react";
import { Provider } from "./context";
import Parent from "./parent";
import User from "./user";
// export const MyContext = createContext();

function ContextApi() {
  const [name, setName] = useState({ name: "faraz", class: "BS" });
  const [value, setValue] = useState(0);

  let handleClick = () => {
    setValue(value + 1);
  };

  let contextValue = { fName: name, clickButton: handleClick };
  return (
    <h3>Hello</h3>
    // <Provider value={contextValue}>
    //   <h1>Hello Developers</h1>
    //   <h3>Value updated {value}</h3>
    //   {/* <Parent /> */}
    //   <User />
    // </Provider>
  );
}

export default ContextApi;
