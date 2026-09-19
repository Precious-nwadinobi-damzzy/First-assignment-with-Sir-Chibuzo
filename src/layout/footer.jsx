import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const Nav = [
    { navName: "About Us", path: "/about" },
    { navName: "Features", path: "/features" },
    { navName: "FAQ", path: "/faq" },
    { navName: "Privacy Policy", path: "/Privacy" },
    { navName: "Terms of Service", path: "/terms" },
  ];

  return (
    <footer className="m-5 grid grid-cols-1 lg:grid-cols-2">
      <section className=" text-white bg-orange-400 text-center lg:text-left flex flex-col items-center md:items-start justify-center py-8 px-16 space-y-8 rounded-t-2xl">
        <div className="text-5xl font-medium md:text-left">
          <h1>Set up your </h1>
          <h1>store in 2 minutes</h1>
        </div>
        
        <p className="text-[21px] font-medium">
          Help your customers patronize your business faster and easier.
        </p>

        <button className="flex gap-3 items-center text-orange-500 rounded-md bg-white py-3 px-4 text-[13px]">
          Get Started{" "}
          <span>
            <MdArrowOutward />
          </span>
        </button>
      </section>

      <section className="bg-black ">
        <img src="othafooter.png" alt="" className="w-full" />
      </section>

      <section className="bg-black text-white flex flex-col items-center md:items-start lg:px-30 lg:py-18 py-18 px-14 md:space-y-8 space-y-4 col-span-1 lg:col-span-2 rounded-b-2xl">
        <div className="md:flex md:flex-row flex-col items-center lg:gap-85 md:gap-47">
        <div className="flex  gap-2 text-2xl font-bold items-center justify-center">
          <img
            src="hero.png"
            alt=""
            className="w-10 bg-orange-500 rounded-2xl"
          />
          <p>OTHA</p>
        </div>

        <nav className="flex gap-6 p-4 md:text-[14px] text-[10px]">
          {Nav.map((q, key) => (
            <NavLink key={key} to={q.path} className="px-2 hover:bg-gray-500 hover:px-2 hover:rounded-md">
              {q.navName}
            </NavLink>
          ))}
        </nav>
        </div>

        <div className="border-b border-b-gray-400 w-full"/>

        <div className="font-medium md:text-[14px]  text-[9px]">
          <p>
            ©2026 Otha Technologies Limited. All Right Reserved
          </p>
        </div>
      </section>
      
    </footer>
  );
}
