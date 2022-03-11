import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Nav from "./components/nav/nav";
import { Sitter } from "./components/Sitter/Sitter";
import Login from "./components/login/login";

import { Map } from "./components/Map/Map";
import { PetHotels } from "./components/PetHotels/PetHotels";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="petHotels" element={<PetHotels />} />
          <Route path="dogMap" element={<Map />} />
          <Route path="dogSitter" element={<Sitter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export { App };
