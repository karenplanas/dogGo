import React from "react";
import { Link } from "react-router-dom";
// import CTA from "../CTA/CTA";
import puppiesSuitcase from "../../static/images/transparent.png";
import HomeSocials from "../HomeSocials/HomeSocials";
import { HomeDiscoverButtons } from "../HomeDiscoverButtons/HomeDiscoverButtons";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h1> DOGGO </h1>
        <h3> Make it their holiday too </h3>
        {/* <CTA /> */}
        <HomeDiscoverButtons />
        {/* <HomeSocials /> */}
        <div className="landingPhoto">
          <img
            src={puppiesSuitcase}
            alt="dogs in suitcase"
            className="dogPic"
          />
        </div>

        {/* <a href="#dogSitter" className="scroll__down">
          Scroll Down
        </a> */}

        {/* <Link to="sitter" >
          <div className="scroll__down">Scroll Down</div>
        </Link> */}

      </div>
    </header>
  );
};

export default Home;
