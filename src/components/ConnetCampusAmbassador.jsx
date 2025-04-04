import React, { useState } from "react";
import student from "../assets/student.jpg";
import { States } from "../data/StatesData";
import toast from "react-hot-toast";

const ConnectCampusAmbassador = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    college: "",
    collegeCity: "",
    collegeState: "",
    program: "",
    bestTimeToCall: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyMwh4vQXD4EDTBAk2jv_2QQOjTdBbFtMS9VLMHTGfyu6jRF1oqTRzu0jcTNjidR7_h/exec";

    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await fetch(scriptURL, {
        method: "POST",
        body: formDataToSend,
      });

      const text = await response.text();

      if (response.ok) {
        const result = JSON.parse(text);
        if (result.status === "success") {
          toast.success("Form submitted successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            city: "",
            college: "",
            collegeCity: "",
            collegeState: "",
            program: "",
            bestTimeToCall: "",
          });
        } else {
          toast.error("Failed to submit form ");
        }
      } else {
        toast.error("Failed to submit form ");
      }
    } catch (error) {
      toast.error("Failed to submit form ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="connect-campus-ambassador"
      className="w-[90%] mx-auto mt-20 space-y-16"
    >
      {/* Header Section */}
      <div>
        <h1 className="md:text-3xl text-2xl font-bold">
          Connect a Campus Ambassador <br />
          <span className="text-[#5FCF80]">for Your College Journey</span>
        </h1>
        <p className="mt-3 text-base font-normal">
          Get tailored advice and insights to kickstart your higher education.
        </p>
        <p className="mt-3 md:text-lg sm:text-base text-sm font-medium">
          Our platform links you with current students at your desired college.{" "}
          <br />
          A campus ambassador can offer real-world perspectives, answer your
          questions, <br />
          and guide you toward your academic goals, no matter the course.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="mt-4 grid md:grid-cols-2 grid-cols-1 gap-5">
        <div className="w-full">
          <h3 className="md:text-2xl text-lg font-bold mt-4">Why Reach Out?</h3>
          <ul className="list-disc mt-3 px-3 gap-y-3 md:text-lg sm:text-base text-sm font-medium">
            <li>Learn the ins and outs of the admission process.</li>
            <li>Get a peek into student life and campus vibes.</li>
            <li>Pick up strategies for entrance tests or applications.</li>
            <li>Explore what your future at the college could look like.</li>
          </ul>
        </div>

        <div className="w-full">
          <h3 className="md:text-2xl text-lg font-bold mt-4">
            What You’ll Gain
          </h3>
          <ul className="list-disc mt-3 px-3 gap-y-3 md:text-lg sm:text-base text-sm font-medium">
            <li>Confidently choose the right college for you.</li>
            <li>Resolve uncertainties about programs and facilities.</li>
            <li>Plan your next steps with student-led advice.</li>
            <li>Connect with someone who gets the journey.</li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex md:flex-row flex-col justify-start items-center gap-3.5 mb-8 w-full">
        <h3 className="text-2xl font-bold">Ready to Connect?</h3>
        <p className="text-wrap text-lg pt-1">
          Fill in the details below to chat with a campus ambassador from your
          target college.
        </p>
      </div>

      {/* Form and Image Section */}
      <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
        <div className="lg:w-1/2 w-full">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-6 h-full"
          >
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your email address"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your phone number"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your current city"
                  required
                />
              </div>
              <div className="md:col-span-2 col-span-1">
                <label className="block text-sm font-medium text-gray-700">
                  Dream College <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Target college name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  College City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="collegeCity"
                  value={formData.collegeCity}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="College city"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  College State <span className="text-red-500">*</span>
                </label>
                <select
                  name="collegeState"
                  value={formData.collegeState}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="" disabled={true}>
                    Select state
                  </option>
                  {States.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Program <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="e.g., B.Tech, MBA, etc."
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Best Time to Call <span className="text-red-500">*</span>
                </label>
                <input
                  type="time"
                  name="bestTimeToCall"
                  value={formData.bestTimeToCall}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>
            <div className="text-center">
              {loading ? (
                <button
                  disabled={true}
                  className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
                >
                  Submitting ...
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
                >
                  Connect with an Ambassador
                </button>
              )}
            </div>
          </form>
        </div>
        <div className="md:w-1/2 w-full">
          <img
            src={student}
            alt="Student"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ConnectCampusAmbassador;
