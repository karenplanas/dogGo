import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const HomeSocials: React.FC = () => {
  return (
    <div className="home_socials">
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <BsFacebook />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HomeSocials;
