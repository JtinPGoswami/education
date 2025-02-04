import React from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import contactUs from "../assets/contact-us-image.png";
import form from "../assets/form.png";
const ContactUsPage = () => {
  return (
    <>
      {/* contactus hero section */}

      <section className="relative mt-24 bg-green-400 text-white text-center h-56 flex flex-col justify-center items-center ">
        <h1 className="text-4xl font-bold">Contact Us</h1>

        <p className="text-lg font-medium">
          "We’re here to help you make the right educational decisions. Reach
          out to us today!"
        </p>

        <p className="absolute bottom-4  left-4 text-lg font-semibold">
          <Link to={`/`}>Home</Link> / Contact
        </p>
      </section>

      {/* contactus form section */}
      <section className="px-4">
        <div className="w-full flex flex-col md:flex-row text-gray-700 mt-8 py-4 px-0    items-center ">
          {/* left section */}
          <div className="md:w-1/2 w-full">
            <p className="text-2xl font-semibold">
              We believe in offering personalized support to every student. If
              you have questions about MBA college selection, entrance exam
              guidance, scholarship information, or need assistance with
              anything else related to your education, don’t hesitate to contact
              us. Our team of experts is ready to help you!
            </p>
          </div>
          {/* right section */}
          <div className="md:w-1/2 w-full h-full flex justify-center items-center ">
            <div className="w-full h-full">
              <img
                src={contactUs}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="   py-6 px-0     max-w-full mx-auto space-y-6 lg:space-y-0 lg:space-x-6">
          {/* Left Section */}
          <div className=" w-full flex flex-col md:flex-row gap-10">
            <div className="bg-green-100 p-6 rounded-2xl shadow-sm flex-1">
              <div className="flex items-center space-x-2">
                <FaLocationDot />
                <h3 className="text-xl font-bold text-gray-700">Address</h3>
              </div>

              <p className="text-gray-600 mt-2">
                101 Western Business Centre, New Palasiya, Indore, MP, India
              </p>
            </div>
            <div className="bg-green-100 p-6 rounded-2xl shadow-sm flex-1">
              <div className="flex items-center space-x-2">
                <IoCallSharp />
                <h3 className="text-xl font-bold text-gray-700">Call Us</h3>
              </div>
              <p className="text-gray-600 mt-2">+91 75828 22000</p>
            </div>
            <div className="bg-green-100 p-6 rounded-2xl shadow-sm flex-1">
              <div className="flex items-center space-x-2">
                <MdEmail />
                <h3 className="text-xl font-bold text-gray-700">Email Us</h3>
              </div>
              <p className="text-gray-600 mt-2">infocampusupdates@gmail.com</p>
            </div>
          </div>

         
          <div className="w-full md:flex block mx-auto mt-10 bg-white lg:px-8 px-0 py-0 rounded-2xl">
            {/* left section */}
            <div className="md:w-1/2 w-full">
                <img src={form} alt="FORM IMG" />
            </div>

            {/* right section */}
            <div className="md:w-1/2 w-full">
            <h3 className="text-2xl font-bold text-gray-700 mb-6">
              Get in TouchIf you’d like to speak with one of our experts, simply
              fill out the form below, and we will get in touch with you as soon
              as possible!
            </h3>
            <form className="space-y-4">
              <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                <div className="w-full">
                  <label htmlFor="Name">Name:</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="email"> Email:</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                <div className="w-full">
                  <label htmlFor="Number">Number:</label>
                  <input
                    type="text"
                    placeholder="Your Phone Number"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="state">State:</label>
                  <select className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>Select State</option>
                    <option>Madhya Pradesh</option>
                    <option>Rajasthan</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  placeholder="Your City"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="Call">Best time to Call:</label>
                <input
                  type="time"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Best time to call"
                />
              </div>

              <div className="w-full">
                <label htmlFor="Message"> Message:</label>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
              >
                Submit
              </button>
            </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsPage;
