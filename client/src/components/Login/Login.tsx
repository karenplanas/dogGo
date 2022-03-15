import React from 'react'
import { useUserContext } from '../../context/UserContext';
import puppiesSuitcase from "../../static/images/transparent.png";
import { GoogleLogin } from "./GoogleLogin";
import { GoogleLogout } from './GoogleLogout';
import './Login.css'

const Login: React.FC = () => {
  const { user } = useUserContext();
  return (
    <div className="login_container ">
      <h1 className="login_title"> DOGGO </h1>
      <div className="landingPhoto login-picture">
        <div>
          {
            user ? <GoogleLogout /> : <GoogleLogin />
          }
        </div>
        <div>
          <img
            src={puppiesSuitcase}
            alt="dogs in suitcase"
            className="dogPic"
          />
        </div>
      </div>
    </div>
  );
};

export { Login };
