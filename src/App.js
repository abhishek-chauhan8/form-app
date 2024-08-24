import { useState } from "react";
import "./App.css";

function App() {
  // here we're handling the state individually

  // const[firstName, setFirstName] = useState("");
  // const[lastName, setLastName] = useState("");

  // function changeFirstNameHandler (event){
  //   setFirstName(event.target.value)
  // }

  // function changeLastNameHandler(event){
  //   setLastName(event.target.value);
  // }

  // here states are handled in an array and object of states is passed into them

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  function changeHandler(event) {
    setFormData((prevStateData) => {
      console.log(formData);
      return {
        ...prevStateData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className="App">
      <form>
        <input
          type="text"
          className="border-4 border-dashed border-black"
          placeholder="First Name"
          name="firstName"
          onChange={changeHandler}
        />
        <br />
        <br />
        <input
          type="text"
          className="border-4 border-dashed border-black"
          placeholder="Last Name"
          name="lastName"
          onChange={changeHandler}
        />
        <br />
        <br />
        <input
          type="text"
          className="border-4 border-dashed border-black"
          placeholder="Enter your email"
          name="email"
          onChange={changeHandler}
        />
      </form>
    </div>
  );
}

export default App;
