import React from "react";
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";
import { Sitter } from "./components/Sitter/Sitter";
import { Login } from "./components/Login/Login";
import { Map } from "./components/Map/Map";
import { Home } from "./components/Home/Home";
import { UserContextProvider } from "./context/UserContext";
import { Hotels } from "./components/Hotels/Hotels";
import './App.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    }
  }
})

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <BrowserRouter>
          <div className="App">
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="hotels" element={<Hotels />} />
              <Route path="map" element={<Map />} />
              <Route path="sitter" element={<Sitter />} />
              <Route path="login" element={<Login />} />
            </Routes>
          </div>
        </BrowserRouter>
      </UserContextProvider>
    </QueryClientProvider>
  );
};

export { App };
