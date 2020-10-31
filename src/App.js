import "./App.css";
import LoginClass from "./component/LoginClass";
import LoginControlled from "./component/LoginControlled";
import Login from "./component/Login";
import RegistretControlClass from "./component/RegistretControlClass";
import LoginFormik from "./component/LoginFormik";

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-3">
            <h3>LoginControlled</h3>
            <LoginControlled />
          </div>{" "}
          <div className="col-2">
            <h3>LoginFormik</h3>
            <LoginFormik />
          </div>
          <div className="col-2">
            <h3>Login</h3>
            <Login />
          </div>
          <div className="col-2">
            <h3>LoginClass</h3>
            <LoginClass />
          </div>
          <div className="col-2">
            <h3>RegistretControlClass</h3>
            <RegistretControlClass />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
