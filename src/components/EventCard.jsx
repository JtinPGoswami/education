import React from "react";

const EventCard = ({event}) => {
  return (
    <div className="space-y-2 box-border text-center py-4 px-8 rounded-lg border-2 border-transparent shadow-2xl  hover:border-t-[#77d693] group transition-colors ease-linear duration-700">
      <h2 className="text-gray-900  group-hover:text-[#77d693] text-2xl font-medium group-hover:scale-105 transition-transform ease-linear duration-200">
        {event.name}
      </h2>
      <p className="text-2xl italic font-light">{event.time}</p>
      <p className="text-base text-gray-600">{event.description}</p>
    </div>
  );
};

export default EventCard;
