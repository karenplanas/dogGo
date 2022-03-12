import React from "react";
import CTA from "../CTA/CTA";
import puppiesSuitcase from "../../static/images/transparent.png";
import HomeSocials from "../homeSocials/homeSocials";
// did i want to have more done yes, yes i did. but also batman came out and a new season of rick and morty on netflix so whos really to blame for my lack of productivity.
import "./home.css";

const Home: React.FC = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h1> DOGGO </h1>
        <h5> Make it their holiday too</h5>
        <CTA />
        <HomeSocials />
        <div className="landingPhoto">
          <img
            src={puppiesSuitcase}
            alt="dogs in suitcase"
            className="dogPic"
          />
        </div>

        <a href="#dogSitter" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Home;
