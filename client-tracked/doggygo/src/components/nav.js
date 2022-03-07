import "../component-styling/nav.css";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaMapMarkedAlt, FaHotel } from "react-icons/fa";
import { GiSittingDog } from "react-icons/gi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#petHotels"
        onClick={() => setActiveNav("#petHotel")}
        className={activeNav === "#petHotel" ? "active" : ""}
      >
        <FaHotel />
      </a>
      <a
        href="#dogMap"
        onClick={() => setActiveNav("#dogMap")}
        className={activeNav === "#dogMap" ? "active" : ""}
      >
        <FaMapMarkedAlt />
      </a>
      <a
        href="#dogSitter"
        onClick={() => setActiveNav("#dogSitter")}
        className={activeNav === "#dogSitter" ? "active" : ""}
      >
        <GiSittingDog />
      </a>
    </nav>
  );
};

export default Nav;
