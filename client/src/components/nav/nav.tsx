import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaMapMarkedAlt, FaHotel } from "react-icons/fa";
import { GiSittingDog } from "react-icons/gi";
import { useState } from "react";
import { useLocation } from "react-router";
import "./nav.css";

const Nav: React.FC = () => {
  const [activeNav, setActiveNav] = useState("/");
  const { pathname } = useLocation();

  return (
    <>
      {pathname === "/login" ? (
        <div></div>
      ) : (
        <nav>
          <a
            href="/"
            onClick={() => setActiveNav("/")}
            className={activeNav === "/" ? "active" : ""}
          >
            <AiOutlineHome />
          </a>
          <a
            href="petHotels"
            onClick={() => setActiveNav("petHotel")}
            className={activeNav === "petHotel" ? "active" : ""}
          >
            <FaHotel />
          </a>
          <a
            href="map"
            onClick={() => setActiveNav("map")}
            className={activeNav === "map" ? "active" : ""}
          >
            <FaMapMarkedAlt />
          </a>
          <a
            href="dogSitter"
            onClick={() => setActiveNav("dogSitter")}
            className={activeNav === "dogSitter" ? "active" : ""}
          >
            <GiSittingDog />
          </a>
        </nav>
      )}
    </>
  );
};

export default Nav;
