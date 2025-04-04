import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import { Toaster } from "react-hot-toast";

const HomeLayout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        document
          .getElementById(location.state.scrollTo)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <>
      <div className="3xl:container 3xl:mx-auto  w-full">
        <Toaster position="top-right" reverseOrder={false} />
        <Header />
        <main className="mt-24 ">
          <Outlet />
        </main>
        <Whatsapp />
        <Footer />
      </div>
    </>
  );
};

export default HomeLayout;
