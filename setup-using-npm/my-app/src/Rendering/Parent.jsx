import React, { useState } from "react";
import Child from "./Child";

function Parent({children}) {
  const [state, setstate] = useState(false);

  const handleChangeState = (e) => setstate((prevState) => !prevState);

  console.log("PARENT")

  return (
    <section>
      <div>Parent</div>
      <button onClick={handleChangeState}>Change State</button>
      {/* {children} */}
    <Child/>
    </section>
  );
}

export default Parent;
