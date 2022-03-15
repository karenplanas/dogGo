// import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import './Login.css'
import { GoogleLogin } from "./GoogleLogin";

const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="login_container ">
      <h1 className="login_title"> DOGGO </h1>
      <div className="login">
        <div className="wrapper">
          <div className="left">
            <GoogleLogin />
            <div className="loginButton btn facebook">
              <AiFillFacebook />
            </div>
            <div className="loginButton btn linkedIn">
              <BsLinkedin />
            </div>
          </div>
          <div className="center">
            <div className="line" />
            <div className="or"> OR </div>
          </div>
          <div className="right">
            <input type="text" placeholder="Username" className="login_input" />
            <input
              type="password"
              placeholder="Password"
              className="login_input"
            />
            <button className="btn btn-primary submit" onClick={handleClick}>
              {" "}
              Login{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
