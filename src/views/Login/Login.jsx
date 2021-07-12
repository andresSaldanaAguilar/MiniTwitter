import logo from "../../img/logo.png";
import "./Login.css";

const Login = () => {
  return (
    <div className="twoSideGrid">
      <div className="flexCentered logoSide">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="flexCentered">
        <div className="loginInputs">
          <label>Username</label>
          <input type="text"></input>
          <label>Password</label>
          <input type="text"></input>
        </div>
      </div>
      <div />
    </div>
  );
};

export default Login;
