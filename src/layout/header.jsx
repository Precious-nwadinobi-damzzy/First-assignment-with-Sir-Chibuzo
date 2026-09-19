import React from "react";
import { NavLink } from "react-router-dom";
import Features from "../pages/Features";

export default function Header() {
  return (
    <header
      className="flex justify-between px-8 py-4 items-center
    text-lg bg-white top-0 sticky z-50"
    >
      <div className="flex gap-2 text-2xl font-bold items-center">
        <img src="hero.png" alt="" className="w-10" />
        <p>OTHA</p>
      </div>
      <nav className="lg:flex hidden justify-between gap-14" id="nav1">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "text-orange-400" : "text-black"}`
          }
        >
          About Us
        </NavLink>
        
        <NavLink to="/features" className={({ isActive }) =>
            `${isActive ? "text-orange-400" : "text-black"}`
          }>Features</NavLink>
        <NavLink to="/faq" className={({ isActive }) =>
            `${isActive ? "text-orange-400" : "text-black"}`
          }>FAQ</NavLink>
        <NavLink to="/pricing" className={({ isActive }) =>
            `${isActive ? "text-orange-400" : "text-black"}`
          }>Posts</NavLink>
        <NavLink to="/leaderboard" className={({ isActive }) =>
            `${isActive ? "text-orange-400" : "text-black"}`
          }>Leaderboard</NavLink>
      </nav>

      <nav className="md:flex hidden gap-6 text-sm">
        <NavLink to="/login" className="border border-orange-400 py-2 px-6 rounded-xl text-orange-400">Login</NavLink>
        <NavLink to="/signup" className="bg-orange-400 py-2 px-8 text-white
        rounded-xl ">Create Account</NavLink>
      </nav>
    </header>
  );
}
