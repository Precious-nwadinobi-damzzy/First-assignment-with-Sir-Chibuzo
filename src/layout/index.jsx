import React from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

export default function Index() {
  return (
    <div className="bg-gray-200 pb-2">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
