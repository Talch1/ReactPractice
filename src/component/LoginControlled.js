import React, { useState } from "react";
import useFormState from "../utils/form-hook";

export default () => {
  // const [loginForm, setloginForm] = useState({
  //   email: "gyhgcvb@jbmbm.com",
  //   password: "1234567",
  // });

  // const updateFormState = (event) =>{
  //   setloginForm({
  //     ...loginForm,
  //     [event.target.name] : event.target.value
  //   });
  // }
  const handleSubmit = (event) => {
    console.log(`${formValues.email}  ${formValues.password}`);
  };
  const [updateFormState, handleFormSubmit, formValues] = useFormState(
    { email: "gyhgcvb@jbmbm.com", password: "1234567" },
    handleSubmit
  );
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="email-input">Email</label>
        <input
          value={formValues.email}
          onChange={updateFormState}
          className="form-control"
          type="email"
          id="email-input"
          name="email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password-input">Password</label>
        <input
          value={formValues.password}
          onChange={updateFormState}
          className="form-control"
          type="password"
          id="password-input"
          name="password"
        />
      </div>
      <div className="form-group">
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
