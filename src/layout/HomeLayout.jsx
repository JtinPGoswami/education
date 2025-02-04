import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <>
      <Header />

      <main className="mt-24">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default HomeLayout;
