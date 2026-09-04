import React from "react";
import FirstAssignment from "../components/firstAssignment";
import Signup from "./Signup";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="py-2">
      <FirstAssignment />

      <button className="bg-gray-600 p-3 rounded-xl w-1/2 m-auto flex justify-center items-center text-white text-2xl font-mono">
        <NavLink to="/Signup">Sign Up</NavLink>
      </button>
    </div>
  );
}
