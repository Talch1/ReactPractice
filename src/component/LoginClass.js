import React from "react";
// import formWhisState from '../utils/form-whis-state'
import FormWhisState from "./FormWhisState/FormWhisState";
export default class LoginClass extends React.Component {
  handleLoginSubmit = (values) => {
    console.log(`${values.email}  ${values.password}`);
  };

  render() {
    return (
      <FormWhisState
        cb={this.handleLoginSubmit}
        initialState={{
          email: "hgfd@kjhg.com",
          password: "000000000",
        }}
        render={(updateFormState, handleSubmit, values) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email-input">Email</label>
                <input
                  value={values.email}
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
                  value={values.password}
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
        }}
      />
    );
  }
}
// export default formWhisState ({
//     email:"hgfd@kjhg.com",
//     password: "000000000"
// })(LoginClass);
