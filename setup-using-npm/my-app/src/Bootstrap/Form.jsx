import { useState } from "react";

function ReactForm() {
  const [formData, setFormData] = useState({
    name: "faraz",
    password: "ali",
    textarea: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const userValue = name === "password" ? value.toUpperCase() : value;

    console.log("name is : " + name + "value for value is " + value);
    setFormData((values) => ({
      ...values,
      [name]: userValue,
    }));
    // setName(e.target.value);
  };
  const handleSubmit = (e) => {
    console.log(e.target[0].value);
    e.preventDefault();
  };

  return (
    <>
      <h3>Controlled By React {formData.name}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={formData.name}
            name="name"
            onChange={handleChange}
            placeholder="Please Enter Here"
          />
          <br></br>
          <br></br>
        </label>

        <label>
          <input
            type="text"
            value={formData.password}
            name="password"
            onChange={handleChange}
            placeholder="Please Enter Here"
          />
          <br></br>
          <br></br>
        </label>

        <label>
          <textarea
            name="textarea"
            type="text"
            value={formData.textarea}
            onChange={handleChange}
            placeholder="plz write here"
          />
        </label>
        <br></br>
        <input type="submit" value={"submit"} />
      </form>
    </>
  );
}

export default ReactForm;
