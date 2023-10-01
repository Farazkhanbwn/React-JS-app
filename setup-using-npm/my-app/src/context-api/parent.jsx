import { useRef, useState } from "react";
import { Provider } from "./context";
import User from "./user";
function Parent() {
  let [userInfo, setUserInfo] = useState({
    name: "",
    subject: "",
    contact: "",
  });
  console.log("Type of User Info" + typeof userInfo);
  // console.log("component Re-rendered");
  const nameUser = useRef("");
  const subjectname = useRef("");
  const contactnum = useRef("");

  let setData = (e) => {
    // Testing
    e.preventDefault();
    // for (let key in userInfo) {
    //   userInfo[key] = nameUser.current.value;
    //   console.log(userInfo[key]);
    //   // console.log(
    //   //   "Value for key : " + key + "Value for userInfo" + userInfo[key]
    //   // );
    // }
    // setUserInfo({ ...userInfo });
    // Actual Way
    setUserInfo({
      // ...[userInfo],
      name: nameUser.current.value,
      subject: subjectname.current.value,
      contact: contactnum.current.value,
    });
    // Not Understand Behind the scene
    // setUserInfo()

    // )((userInfo.subject = subjectname.current.value)),
    // (userInfo.contact = contactnum.current.value))

    // setUserInfo({ ...userInfo });
  };

  return (
    <>
      <h2>Name : {userInfo.name}</h2>
      <h2>Subject : {userInfo.subject}</h2>
      <h2>Contact : {userInfo.contact}</h2>
      <input
        type="text"
        // value={userInfo.name}
        name="name"
        placeholder="Enter Name Here"
        ref={nameUser}
        // onSubmit={setData}
      />
      <br></br>
      <br></br>
      <input
        type="text"
        name="subject"
        placeholder="Enter Subject"
        ref={subjectname}
      />
      <br></br>
      <br></br>
      <input
        type="text"
        name="contact"
        placeholder="Enter Contact Number"
        ref={contactnum}
      />
      <br></br>
      <br></br>
      <button onClick={setData}>Submit</button>
      <Provider value={userInfo}>{<User />}</Provider>
    </>
  );
}

export default Parent;
