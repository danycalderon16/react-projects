import { useState } from "react";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: ""
  })

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  })

  const emailIsInvalud =
  didEdit.email &&
  !enteredValues.email.includes('@');

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(value, identifier) {
    setEnteredValues((prevValues) => {
      return {
        ...prevValues,
        [identifier]: value
      } 
    });
    setDidEdit((prevValues) => ({
      ...prevValues,
      [identifier]:false
    }))
  }

  function handleInputBlur(identifier) {
   setDidEdit(prevValues => ({
      ...prevValues,
      [identifier]:true
    })) 
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={()=>handleInputBlur("email")}
            onChange={(e)=>handleChange(e.target.value, "email")}
            value={enteredValues.email}
          />
          <div className="control-error">
            {emailIsInvalud && <p>Please enter a valid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enteredValues.password}
            onChange={(e)=>handleChange(e, "password")}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
