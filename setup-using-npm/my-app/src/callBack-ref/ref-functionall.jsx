import { useRef } from "react";

function RefFunction() {
  let myRef = useRef(null);

  return (
    <>
      <h2>Ref Functional Component </h2>
      <form>
        Name : <input type="input" />
        <br></br>
        <br></br>
        Password : <input type="input" ref={myRef} />
        <br></br>
        <br></br>
        Address : <input type="input" />
        <br></br>
        <br></br>
      </form>
    </>
  );
}

export default RefFunction;
