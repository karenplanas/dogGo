import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FaMapMarkedAlt, FaHotel, FaRegUser } from "react-icons/fa";
import { GiSittingDog } from "react-icons/gi";
import { useLocation } from "react-router";
import clsx from 'clsx'
import "./nav.css";

const Nav: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <>
      { pathname === "/login" ? (<div></div>) : 
        (
          <nav>
            <Link to="/" className={ clsx({active: pathname === "/"})} >
              <AiOutlineHome /> 
            </Link>
          
            <Link to="petHotels" className={ clsx({active: pathname.startsWith("/petHotel")})  } >
              <FaHotel />
            </Link>
          
            <Link to="map" className={ clsx({active:pathname.startsWith("/map")}) } >
              <FaMapMarkedAlt />
            </Link>
            
            <Link to="sitter" className={ clsx({active: pathname.startsWith("/sitter")}) } >
              <GiSittingDog />
            </Link>

            <Link to="login" className={ clsx({active: pathname.startsWith("/login")})} >
              <FaRegUser />
            </Link>
          </nav>
        )
      }
    </>
  );
};

export default Nav;
