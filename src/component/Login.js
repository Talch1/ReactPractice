import React from "react";

export default () => {

    const emailRef = React.createRef();
    const passworsRef = React.createRef();
    const handleSubmit = (event)=>{
       event.preventDefault();
       const email = emailRef.current.value;
       const password = passworsRef.current.value;
       console.log(email,password);
    }
  return (
    <form onSubmit ={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email-input">Email</label>
        <input  
        ref={emailRef}
        className= 'form-control'
        type="email" 
        id="email-input"
         name="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password-input">Password</label>
        <input 
        ref ={passworsRef}
        className= 'form-control'
        type="password"
         id="password-input" 
         name="password" />
      </div>
      <div className="form-group" >
          <button className = 'btn btn-primary' type = 'submit'>Submit</button>
      </div>
    </form>
  );
};
