import React, { useState } from "react";
import Home from "./components/home";
import Nav from "./components/nav";
import DogSitter from "./components/dogSitter";

import DogMap from "./components/dogMap";
import PetHotels from "./components/petHotels";

function App() {
  return (
    <div className="App">
      <Home />
      <Nav />
      <PetHotels />
      <DogMap />
      <DogSitter />
    </div>
  );
}

export default App;
