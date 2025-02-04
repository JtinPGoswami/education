import React, { useState, useRef, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const FaqSection = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, faqs.length);
  }, [faqs]);

  return (
    <div className=" mt-6 p-4 border border-gray-300 rounded-xl mx-4 mb-10 ">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300">
          {/* Question Section */}
          <div
            className="py-4 px-4 cursor-pointer flex gap-2 items-center"
            onClick={() => toggleFAQ(index)}
          >
            <span className="text-gray-800">
              {activeIndex === index ? (
                <FaMinus className="text-lg font-semibold" />
              ) : (
                <FaPlus className="text-lg font-semibold" />
              )}
            </span>
            <h3 className="text-lg font-semibold text-gray-600">
              {faq.question}
            </h3>
          </div>

          {/* Answer Section */}
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className="overflow-hidden transition-[height,opacity] duration-500 ease-in-out border-t border-gray-300"
            style={{
              height: activeIndex === index
                ? `${contentRefs.current[index]?.scrollHeight}px`
                : "0px",
              opacity: activeIndex === index ? 1 : 0,
            }}
          >
            <p className="text-base p-4 text-[#2B016E]">{faq.ans}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqSection;
