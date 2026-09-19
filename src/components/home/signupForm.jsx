import React, { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";

export default function SignupForm() {
  return (
    <section className="w-1/2 m-auto mt-4 p-4 shadow-xl rounded-xl">
      <h1 className="text-center font-bold text-2xl">SIGN UP</h1>

      <Form label="Username" placeholder="Enter your username" type="text" />

      <Form label="Email" placeholder="Enter your email address" type="email" />

      <Form label="Password" placeholder="******" type="password" />

      <Form label="Confirm Password" placeholder="******" type="password" />

      <Form type="checkbox" p="I agree to the terms and conditions" />
      <Form type="submit" />
    </section>
  );
}

function Form({ label, placeholder, type, p }) {
  const [showpswd, setShowpswd] = useState(false);

  if (type === "password") {
    return (
      <div>
        <label htmlFor="" className="block font-semibold">
          {label}
        </label>

        <div className="relative">
          <input
            type={showpswd ? "text" : "password"}
            placeholder={placeholder}
            className="w-full placeholder:text-gray-400 border border-gray-300 rounded-md outline-0 p-2
          "
          />

          <button onClick={() => setShowpswd(!showpswd)} className="absolute -translate-x-10 translate-y-3">
            {showpswd ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        </div>
      </div>
    );
  }

  if (type === "checkbox") {
    return (
      <div className="flex gap-2 text-[10px] mt-4">
        <input type={type} />
        <p>{p}</p>
      </div>
    );
  }

  if (type === "submit") {
    return (
      <button
        type={type}
        className="bg-blue-600 p-2 w-full rounded-md mt-2 text-white"
      >
        Sign up
      </button>
    );
  }

  return (
    <form action="">
      <div>
        <label htmlFor="" className="block font-semibold">
          {label}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full placeholder:text-gray-400 border border-gray-300 rounded-md outline-0 p-2
          "
        />
      </div>
    </form>
  );
}
