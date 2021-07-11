import logo from "../../logo.png";
import "./Login.css";

const Login = () => {
  return (
    <div className="twoSideGrid">
      <div className="logoSide">
        <img src={logo} className="invert" alt="logo" />
      </div>
      <div className="inputSide">
        <label>Username</label>
        <input type="text"></input>
        <label>Password</label>
        <input type="text"></input>
      </div>
      <div />
    </div>
  );
};

export default Login;
