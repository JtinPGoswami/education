import { TbBrandWhatsapp } from "react-icons/tb";

const Whatsapp = () => {

  return <div className="bg-green-600 rounded-full p-2 fixed bottom-10 right-10 hover:scale-125 transition-all duration-400 ease-linear ">
    <a href="https://wa.me/917582822000" target="_blank" rel="noreferrer">

    <TbBrandWhatsapp className="text-4xl text-white " /> 
    </a>
  </div>;
};

export default Whatsapp;
