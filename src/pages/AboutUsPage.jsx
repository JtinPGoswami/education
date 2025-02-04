import React from "react";
import { Link } from "react-router-dom";
import aboutUs from "../assets/about-us-image.png";
import { MdOutlineDoneOutline } from "react-icons/md";
const AboutUsPage = () => {
  const cardData=[
    {
      title: "Comprehensive College & Course Reviews",
      content:
        "Making an informed decision starts with knowing which institutions and courses align with your aspirations.",
      list: [
        "Course curriculum and its relevance to industry demands.",
        "Placement records and career prospects.",
        "Faculty expertise and infrastructure quality.",
        "Real student reviews and alumni experiences.",
      ],
      afterList:
        "Our platform ensures that you don’t just rely on rankings but also gain authentic insights from those who have walked the path before you.",
    },
    {
      title: "Personalized Course & Career Guidance",
      content:
        "Every student has a unique academic background, interests, and career aspirations.",
      list: [
        "Your preferred field of study: Engineering, Law, Management, Medical, Arts, etc.",
        "Your location preferences for studying.",
        "Your career goals and industry trends.",
      ],
      afterList:
        "With our AI-powered guidance system and expert counselors, you can explore the best courses and institutions tailored to your needs.",
    },
    {
      title: "Entrance Exam Preparation & Admission Guidance",
      content:
        "Competitive entrance exams are often the gateway to top colleges and universities.",
      list: [
        "JEE, NEET, GATE, CAT, CLAT, UPSC, GMAT, GRE, or any other major exam.",
        "Looking for exam syllabus, preparation tips, and mock tests.",
        "Seeking advice from toppers and subject matter experts.",
      ],
      afterList:
        "Campus Updates provides a one-stop resource hub to help you excel in your exams and secure admission to your desired institution.",
    },
    {
      title: "Mentorship & Career Support from Experts",
      content: "We believe in learning beyond textbooks.",
      list: [
        "Industry professionals and mentors who can provide practical insights.",
        "Alumni networks to guide students based on real experiences.",
        "Career counselors who help students with goal setting, interview preparation, and skill development.",
      ],
      afterList:
        "Whether you're choosing a specialization, preparing for a job interview, or looking for internships, our expert guidance will give you a competitive edge.",
    },
  ]
  return (
    <>
      <section className="relative mt-24 bg-green-400 text-white text-center h-56 flex flex-col justify-center items-center ">
        <h1 className="text-4xl font-bold">About Us</h1>

        <p className="text-lg font-medium">
          Your Trusted Guide to Higher Education and Career Success!
        </p>

        <p className="absolute bottom-4  left-4 text-lg font-semibold">
          <Link to={`/`}>Home</Link> / About-us
        </p>
      </section>

      <section className="px-4">
        <div className="w-full flex flex-col md:flex-row text-gray-700 mt-8 py-4 px-0    items-center ">
          {/* left section */}
          <div className="md:w-1/2 w-full">
            <p className="text-2xl font-semibold">
              At Campus Updates, we believe that choosing the right college,
              course, and career path is one of the most important decisions a
              student will ever make. With countless options available in
              today’s fast-paced academic world, students often find themselves
              overwhelmed by misinformation, limited guidance, and unclear
              admission processes. That’s where we come in!
            </p>
            <p className="text-2xl font-semibold mt-3">
              Our mission is to empower students with transparent, reliable, and
              up-to-date information so they can confidently take the next step
              toward their dream careers. Whether you're aiming for an MBA, law,
              engineering, medical degree, or any other professional course,
              Campus Updates is here to simplify your journey.
            </p>
          </div>
          {/* right section */}
          <div className="md:w-1/2 w-full h-full flex justify-center items-center ">
            <div className="w-full h-full">
              <img
                src={aboutUs}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 w-[90%] mx-auto mt-10 group">
  {cardData.map((item, index) => (
    <div
      key={index}
      className="bg-green-100 p-6 rounded-2xl shadow-sm px-10 transition-all ease-linear duration-200 group-hover:scale-[98%] hover:scale-105"
    >
      <div className="flex items-center space-x-2">
        <MdOutlineDoneOutline />
        <h3 className="text-xl font-bold text-gray-700">{item.title}</h3>
      </div>

      <p className="text-gray-600 mt-2">{item.content}</p>
      <ul className="list-disc text-gray-700 my-5">
        {item.list.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
      <p className="text-gray-600 mt-2">{item.afterList}</p>
    </div>
  ))}
</div>

      </section>

      <section className="my-20 w-4/5 mx-auto text-center space-y-5">
        <h2 className="text-green-500 font-bold text-3xl">Our Vision & Commitment to Students</h2>
        <p>
          At Campus Updates, our vision is simple: to create a world where every
          student has access to accurate, unbiased, and personalized educational
          guidance.
        </p>
        <p>
          We are constantly updating our platform with the latest trends in
          education, college admissions, competitive exams, and career
          opportunities to ensure students stay ahead.
        </p>
        <ul>
          <li>
            Trust & Transparency – We provide authentic information based on
            verified sources.
          </li>
          <li>
            Accessibility for All – Our resources are free and easy to navigate
            for students across different backgrounds.
          </li>
          <li>
            Student-Centric Approach – Every feature we build is designed to
            help students make better decisions about their future.
          </li>
        </ul>
      </section>
    </>
  );
};

export default AboutUsPage;
