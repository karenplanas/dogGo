import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav/nav";
import { Sitter } from "./components/Sitter/Sitter";
import Login from "./components/Login/Login-2";

import { Map } from "./components/Map/Map";
import { PetHotels } from "./components/PetHotels/PetHotels";
import Home from "./components/Home/home-2";
import { LoginScreen } from "./components/LoginScreen/LoginScreen";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="petHotels" element={<PetHotels />} />
          <Route path="map" element={<Map />} />
          <Route path="sitter" element={<Sitter />} />
          {/* <Route path="login" element={<LoginScreen />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export { App };
