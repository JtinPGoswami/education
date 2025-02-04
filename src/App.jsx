import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage";
import CollegeDetailPage from "./pages/CollegeDetailPage";
import { CollegeProvider } from "./context/CollegeContext";
import AllColleges from "./pages/AllColleges";
function App() {
  return (
    <>
      <CollegeProvider>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/college" element={<AllColleges/>} />
            <Route path="/college-detail" element={<CollegeDetailPage />} />
          </Route>
        </Routes>
      </CollegeProvider>
    </>
  );
}

export default App;
