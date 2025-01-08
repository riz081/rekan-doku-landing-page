import React from 'react';
import { 
  WhatsAppWhite,
} from '../assets'

const WhatsAppButton = () => {
  return (    
    <div 
      className="fixed bottom-8 right-8 flex justify-center items-center w-[83px] h-[83px] rounded-[50px] z-50 cursor-pointer"
      style={{
        border: "5px solid #B964FF",
        background: "linear-gradient(270deg, #3257DA -73.39%, #A162F9 126.61%)",
      }}
    >
      <img
        className="w-12 h-12"
        src={WhatsAppWhite}
        alt="WhatsApp"
      />
    </div>
  );
};

export default WhatsAppButton;
