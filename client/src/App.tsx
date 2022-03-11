import React, { useState } from "react";
import Home from "./components/home/home";
import Nav from "./components/nav/nav";
import DogSitter from "./components/dogSitter/dogSitter";
import Login from "./components/login/login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Map } from "./components/Map/Map";
import PetHotels from "./components/petHotels/petHotels";

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
          <Route path="dogSitter" element={<DogSitter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export { App };
