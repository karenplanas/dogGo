import "../component-styling/home.css";
import React from "react";
import CTA from "./CTA";
// import puppiesSuitcase from "../static/images/puppiesSuitcase.jpeg";
import HomeSocials from "./homeSocials";

const Home = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h1> DOGGO </h1>
        <h5> Make it their holiday too</h5>
        <CTA />
        <HomeSocials />
        <div className="landingPhoto">
          {/* <img src={puppiesSuitcase} alt="dogs in suitcase" /> */}
        </div>

        <a href="#dogSitter" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Home;
