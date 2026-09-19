import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Index from "./layout";
import Login from "./pages/Login";
import Faq from "./pages/Faq";
import Features from "./pages/Features";
import Posts from "./pages/Posts";
import Leaderboard from "./pages/Leaderboard";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />}>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="Features" element={<Features />} />
        <Route path="Pricing" element={<Posts />} />
        <Route path="Leaderboard" element={<Leaderboard />} />
      </Route>
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="terms" element={<Terms />} />
    </Routes>
  );
}

export default App;
