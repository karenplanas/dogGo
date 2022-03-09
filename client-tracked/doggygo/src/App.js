import React, { useState } from "react";
import Home from "./components/home";
import Nav from "./components/nav";
import DogSitter from "./components/dogSitter";
import Login from "./components/login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DogMap from "./components/dogMap";
import PetHotels from "./components/petHotels";

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
