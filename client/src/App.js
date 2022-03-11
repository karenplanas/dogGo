import React, { useState } from "react";
import Home from "./components/home/home";
import Nav from "./components/nav/nav";
import DogSitter from "./components/dogSitter/dogSitter";
import Login from "./components/login/login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DogMap from "./components/dogMap/dogMap";
import PetHotels from "./components/petHotels/petHotels";

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="petHotels" element={<PetHotels />} />
          <Route path="dogMap" element={<DogMap />} />
          <Route path="dogSitter" element={<DogSitter />} />
        </Routes>
      </div>
    </BrowserRouter>

    // <div className="app">
    //   <Login />
    // </div>
  );
}

export default App;
