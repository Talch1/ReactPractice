import React from 'react';
import formWhisState from '../utils/form-whis-state'
 class LoginClass extends React.Component {
    

   handleLoginSubmit = ()=>{
        console.log(`${this.props.email}  ${this.props.password}` );
     }

    render() {
        return (
            <form onSubmit ={(event)=>{this.props.handleSubmit(event,this.handleLoginSubmit)}}>
            <div className="form-group">
              <label htmlFor="email-input">Email</label>
              <input
                value={this.props.email}
                onChange={this.props.updateFormState}
                className="form-control"
                type="email"
                id="email-input"
                name="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password-input">Password</label>
              <input
                value={this.props.password}
                onChange = {this.props.updateFormState}
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
        )
    }
}
export default formWhisState ({
    email:"hgfd@kjhg.com",
    password: "000000000"
})(LoginClass);