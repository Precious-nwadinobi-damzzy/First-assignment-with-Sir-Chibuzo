import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Index from "./layout";
import Login from "./pages/Login";
import Faq from "./pages/Faq";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Leaderboard from "./pages/Leaderboard";
import About from "./pages/About";

function App() {
  return (
  
    
  
    <Routes>
      <Route path="/" element={<Index />}>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="Features" element={<Features />} />
        <Route path="Pricing" element={<Pricing />} />
        <Route path="Leaderboard" element={<Leaderboard />} />
      </Route>
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
    </Routes>
  )
}

export default App;
