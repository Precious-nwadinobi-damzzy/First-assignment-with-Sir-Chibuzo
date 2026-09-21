import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaArrowRotateRight } from "react-icons/fa6";
import Header from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

export default function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // const { data, isLoading } = useQuery({
  //   queryFn: Index,
  //   queryKey: ["main"],
  // });
  // console.log(data);

  if (loading) {
    return (
      <div className="text-5xl flex justify-center items-center animate-spin [animation-duration:2s] inset-50 fixed ">
        <FaArrowRotateRight className="animate-color-pulse" />
      </div>
    );
  } else {
    // if (isError)
    //   return (
    //     <div>
    //       <p>page error {error.message}</p>
    //     </div>
    //   );
    return (
      <div className="bg-gray-200 pb-2 scrollbar-none">
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  }
}
