import React, { useState, useEffect, useRef } from "react";
import logo_main from "../assets/logo_main.png";
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCollege } from "../context/CollegeContext";
import { collegeDetailedData } from "../data/college";
import { MdKeyboardArrowDown } from "react-icons/md";
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredColleges, setFilteredColleges] = useState([]);
  const { selectCollege } = useCollege();
  const navigate = useNavigate();
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 1500);
  };

  // const handleSearch = (e) => {
  //   const term = e.target.value;
  //   setSearchTerm(term);
  //   if (term.length > 0) {
  //     const results = collegeDetailedData.filter((college) =>
  //       college.name.toLowerCase().includes(term.toLowerCase())
  //     );
  //     setFilteredColleges(results);
  //   } else {
  //     setFilteredColleges([]);
  //   }
  // };

  // const handleSelectCollege = (id) => {
  //   const selected = collegeDetailedData.find((college) => college.id === id);
  //   if (selected) {
  //     selectCollege(selected);
  //     navigate("/college-detail");
  //   }
  //   setSearchTerm("");
  //   setFilteredColleges([]);
  //   setIsSidebarOpen(false);
  // };
  const handleNavigation = (sectionId) => {
    setIsSidebarOpen(false);
    navigate("/"); // Navigate to home page
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // Delay to ensure smooth scroll after navigation
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <>
      <header className=" 3xl:container w-full mx-auto z-30 fixed top-0 xl:px-20 flex justify-between shadow-md items-center p-4 h-26 bg-white text-black">
        <Link to={"/"}>
          <div className="h-24">
            <img className="h-24 " src={logo_main} alt="campus updates logo" />
          </div>
        </Link>
        <div className="flex md:w-[95%] w-1/2 md:justify-end justify-center items-center lg:gap-5 gap-3.5">
          {/* <div className="w-full md:w-[30%] hidden relative sm:flex justify-between bg-transparent border border-slate-300 rounded-full h-8">
            <input
              type="text"
              className="outline-none border-none pl-2 w-[90%] rounded-tl-full rounded-bl-full"
              value={searchTerm}
              onChange={handleSearch}
            />
            <div className="w-10 bg-[#77d693] rounded-tr-full rounded-br-full flex items-center justify-center">
              <FiSearch className="text-xl text-white" />
            </div>
          </div> */}
          {/* {filteredColleges.length > 0 && (
            <ul className="absolute sm:block hidden  left-0 top-24 mt-1 w-full bg-white border shadow-md rounded-md max-h-60 overflow-y-auto">
              {filteredColleges.map((college) => (
                <li
                  key={college.id}
                  className="p-2 cursor-pointer hover:bg-gray-100 font-bold"
                  onClick={() => handleSelectCollege(college.id)}
                >
                  {college.name}
                </li>
              ))}
            </ul> */}
          {/* )} */}

          <ul className="hidden lg:flex justify-center lg:gap-5 gap-3.5">
            <NavLink
              to="/"
              className={({ isActive }) => isActive && "text-[#77d693] "}
            >
              <li
                className="cursor-pointer text-base font-semibold hover:text-[#77d693]"
                onClick={() => navigate("/")}
              >
                Home
              </li>
            </NavLink>
            <div className="relative  flex flex-col items-center">
              <button
                className={`cursor-pointer flex items-center  gap-2 text-base font-semibold hover:text-[#77d693] ${
                  isHovered ? "text-[#77d693]" : ""
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Campus Ambassador
                <MdKeyboardArrowDown />
              </button>
              <div
                className={`bg-white absolute top-16 px-4 space-y-3 w-fit py-2 text-nowrap shadow-lg z-50 transition-all duration-400 ease-linear  ${
                  isHovered
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <li
                  className="cursor-pointer text-sm font-semibold hover:text-[#77d693]"
                  onClick={() => handleNavigation("campus-ambassador")}
                >
                  Become a Campus Ambassador
                </li>
                <li
                  className="cursor-pointer text-sm  font-semibold hover:text-[#77d693]"
                  onClick={() => handleNavigation("connect-campus-ambassador")}
                >
                  Connect a Campus Ambassador
                </li>
              </div>
            </div>
            <NavLink
              to={"/college"}
              className={({ isActive }) =>
                isActive && "text-[#77d693] font-bold"
              }
            >
              <li className="cursor-pointer text-base font-semibold hover:text-[#77d693]">
                Colleges
              </li>
            </NavLink>
            <NavLink
              to="/career"
              className={({ isActive }) =>
                isActive && "text-[#77d693] font-bold"
              }
            >
              <li
                className="cursor-pointer text-base font-semibold  hover:text-[#77d693]"
                onClick={() => {
                  setIsSidebarOpen(false);
                }}
              >
                Career
              </li>
            </NavLink>
            <li
              className="cursor-pointer text-base font-semibold hover:text-[#77d693]"
              onClick={() => handleNavigation("courses")}
            >
              Courses
            </li>
            <li
              className="cursor-pointer text-base font-semibold hover:text-[#77d693]"
              onClick={() => handleNavigation("expert")}
            >
              Our Experts
            </li>
            <li
              className="cursor-pointer text-base font-semibold hover:text-[#77d693]"
              onClick={() => handleNavigation("testimonials")}
            >
              Testimonials
            </li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive && "text-[#77d693] font-bold"
              }
            >
              <li className="cursor-pointer text-base font-semibold  hover:text-[#77d693]">
                Contact Us
              </li>
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive && "text-[#77d693] font-bold"
              }
            >
              <li className="cursor-pointer text-base font-semibold hover:text-[#77d693]">
                About Us
              </li>
            </NavLink>
          </ul>
        </div>

        <RxHamburgerMenu
          className="lg:hidden block text-2xl mr-10 cursor-pointer active:scale-105"
          onClick={toggleSidebar}
        />
      </header>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-20 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 w-64 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Link to={"/"}>
            <img
              className="h-12 rounded-full"
              src={logo_main}
              alt="campus updates logo"
            />
          </Link>
          <RxCross2
            className="text-2xl cursor-pointer text-black"
            onClick={toggleSidebar}
          />
        </div>

        {/* Search Input in Sidebar */}
        {/* <div className="w-full relative mt-4 mb-4 px-6">
          <input
            type="text"
            className="outline-none border sm:hidden block border-slate-300 rounded-full w-full pl-2 h-8"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search colleges"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#77d693] rounded-full p-2">
            <FiSearch className="text-white" />
          </div>
          {filteredColleges.length > 0 && (
            <ul className="absolute left-0 top-10 mt-1 w-full bg-white border shadow-md rounded-md max-h-60 overflow-y-auto">
              {filteredColleges.map((college) => (
                <li
                  key={college.id}
                  className="p-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSelectCollege(college.id)}
                >
                  {college.name}
                </li>
              ))}
            </ul>
          )}
        </div> */}

        <ul className="flex flex-col gap-6 mt-8 px-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) => isActive && "text-[#77d693] font-bold"}
          >
            <li
              className="cursor-pointer text-base font-semibold  hover:text-[#77d693]"
              onClick={() => {
                setIsSidebarOpen(false);
              }}
            >
              Home
            </li>
          </NavLink>
          <li
            className="cursor-pointer text-base text-center font-semibold hover:text-[#77d693]"
            onClick={() => handleNavigation("campus-ambassador")}
          >
            Become a Campus Ambassador
          </li>
          <li
            className="cursor-pointer text-base text-center font-semibold hover:text-[#77d693]"
            onClick={() => handleNavigation("connect-campus-ambassador")}
          >
            Connect a Campus Ambassador
          </li>

          <NavLink
            to={"/college"}
            className={({ isActive }) => isActive && "text-[#77d693] font-bold"}
          >
            <li
              className="cursor-pointer text-base font-semibold hover:text-[#77d693]"
              onClick={() => {
                setIsSidebarOpen(false);
              }}
            >
              Colleges
            </li>
          </NavLink>
          <NavLink
            to="/career"
            className={({ isActive }) => isActive && "text-[#77d693] font-bold"}
          >
            <li
              className="cursor-pointer text-base font-semibold  hover:text-[#77d693]"
              onClick={() => {
                setIsSidebarOpen(false);
              }}
            >
              Career
            </li>
          </NavLink>
          <li
            className="cursor-pointer text-base font-semibold hover:text-[#77d693]"
            onClick={() => {
              handleNavigation("courses");
              setIsSidebarOpen(false);
            }}
          >
            Courses
          </li>
          <li
            className="cursor-pointer text-base font-semibold hover:text-[#77d693]"
            onClick={() => {
              handleNavigation("expert");
              setIsSidebarOpen(false);
            }}
          >
            Our Experts
          </li>
          <li
            className="cursor-pointer text-base font-semibold hover:text-[#77d693]"
            onClick={() => handleNavigation("testimonials")}
          >
            Testimonials
          </li>
          <NavLink
            to="/contact-us"
            className={({ isActive }) => isActive && "text-[#77d693] font-bold"}
          >
            <li
              className="cursor-pointer text-base  font-semibold hover:text-[#77d693]"
              onClick={() => {
                setIsSidebarOpen(false);
              }}
            >
              Contact
            </li>
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) => isActive && "text-[#77d693] font-bold"}
          >
            <li
              className="cursor-pointer text-base font-semibold  hover:text-[#77d693]"
              onClick={() => {
                setIsSidebarOpen(false);
              }}
            >
              About Us
            </li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Header;
