import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 md:px-32 px-4 pt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-8">
        {/* Left Section */}
        <div className="md:w-1/3">
          <h2 className="text-xl font-bold mb-4">Campus-Update</h2>
          <p>6th Floor, Tower B, Connaught Place, Rajiv Chowk</p>
          <p>New Delhi - 110001, India</p>
          <a href="tel:+91 7582822000">
            <p className="mt-2">Phone: +91 7582822000</p>
          </a>
          <a href="mailto:infocampusupdates@gmail.com">
            <p>Email: infocampusupdates@gmail.com</p>
          </a>
          <div className="flex gap-4 mt-4">
            <a target="_blank" href="https://www.instagram.com/campusupdates_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-gray-700 hover:text-green-600 text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 text-xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 text-xl">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-2/3">
          <div className="grid grid-cols-2 gap-6">
            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to={"/"} className="hover:text-green-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/about-us"} className="hover:text-green-600">
                    About us
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Terms of service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="md:w-2/3">
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-green-600">
                    MBA Admissions Counseling
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Profile Building & Resume Review
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    GMAT/GRE Preparation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600">
                    Scholarship Guidance
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center border-t pt-4">
        <p>
          © {new Date().getFullYear()} Copyright <strong>Campus-Update</strong>{" "}
          All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
