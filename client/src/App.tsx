import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav/nav";
import { Sitter } from "./components/Sitter/Sitter";
import { Login } from "./components/Login/Login";
import { Map } from "./components/Map/Map";
import { PetHotels } from "./components/PetHotels/PetHotels";
import { Home } from "./components/Home/Home";
import { UserContextProvider } from "./context/UserContext";

const App: React.FC = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="petHotels" element={<PetHotels />} />
            <Route path="map" element={<Map />} />
            <Route path="sitter" element={<Sitter />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContextProvider>
  );
};

export { App };
