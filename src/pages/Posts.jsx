import React, { useState } from "react";
import { PriceAPI } from "../components/JS Folder/PriceAPI";
import { useQuery } from "@tanstack/react-query";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
export default function Pricing() {
  const [toggleBtn, setToggleBtn] = useState(false);

  function handleToggle(ok) {
    setToggleBtn(toggleBtn === ok ? false : ok);
  }

  const { data, isLoading, isError, error } = useQuery({
    queryFn: PriceAPI,
    queryKey: ["pricing"],
  });
  console.log(data);

  if (isLoading) return <div>page loading</div>;

  if (isError)
    return (
      <div>
        <p>page error {error.message}</p>
      </div>
    );

  return (
    <section className="p-4 bg-gray-300">
      <h1 className="text-center md:text-4xl text-2xl font-bold text-stone-200 animate-color-pulse">WELCOME AND EXPLORE!</h1>
      <div className="space-y-6 md:px-18 px-10 mt-4 grid lg:grid-cols-2 lg:space-x-2 grid-cols-1">
        {data.posts.map((collect) => (
          <div key={collect.id} className="border-2 border-gray-400 p-6 bg-white rounded-xl">
            <div>
              <p className="flex items-center gap-2 text-[18px] font-semibold bg-olive-300 lg:w-2/7 md:w-2/10 w-1/2 justify-center rounded-full px-2">
                User ID: {collect.userId}
              </p>
              <h1
                className={`font-bold text-xl font-mono ${toggleBtn === collect.id ? "hidden" : "block"}`}
              >
                {collect.title}...
              </h1>

              <button
                onClick={() => handleToggle(collect.id)}
                className={`flex gap-2 items-center font-bold ${toggleBtn ? "animate-none" : "animate-pulse"}`}
              >
                {toggleBtn === collect.id ? "See Less" : "See More"}
                <span
                  className={`text-3xl ${toggleBtn === collect.id ? "rotate-180" : ""}`}
                >
                  <TiArrowSortedDown />
                </span>
              </button>
            </div>

            <div
              className={`bg-gray-300 text-black px-6 py-4 border-2 border-gray-200 rounded-2xl shadow-[inset_0_0px_20px_rgba(0,0,0,0.9) text-xl tracking-tight ${toggleBtn === collect.id ? "block" : "hidden"}`}
            >
              <p>{collect.body}</p>
            </div>

            <div className={`${toggleBtn === collect.id ? "block" : "hidden"}`}>
              {collect.tags.map((getTag, idx) => (
                <span key={idx} className="text-stone-400 text-xl font-mono">
                  {getTag}{" "}
                </span>
              ))}
              <div className="flex gap-8">
                <p className="flex items-center gap-2 text-[18px]">
                  <span>
                    <FaThumbsUp />
                  </span>
                  {collect.reactions.likes}
                </p>
                <p className="flex items-center gap-2 text-[18px]">
                  <span>
                    <FaThumbsDown />
                  </span>
                  {collect.reactions.dislikes}
                </p>
              </div>

              <p className="flex items-center gap-2 text-[18px]">
                <span>
                  <LuEye />
                </span>
                {collect.views}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
