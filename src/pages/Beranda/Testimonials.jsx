import React, { useEffect, useRef } from 'react';
import {
  Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8, Client9, Client10,
  Client11, Client12, Client13, Client14, Client15, Client16, Client17, Client18, Client19, Client20,
  Client21, Client22, Client23, Client24, Client25,
} from '../../assets/svg';
import Constants from '../../utils/Constants';

const clientLogosRow1 = [
  { src: Client1, alt: 'Client 1' },
  { src: Client2, alt: 'Client 2' },
  { src: Client3, alt: 'Client 3' },
  { src: Client4, alt: 'Client 4' },
  { src: Client5, alt: 'Client 5' },
  { src: Client6, alt: 'Client 6' },
  { src: Client7, alt: 'Client 7' },
  { src: Client8, alt: 'Client 8' },
  { src: Client9, alt: 'Client 9' },
  { src: Client10, alt: 'Client 10' },
  { src: Client11, alt: 'Client 11' },
  { src: Client12, alt: 'Client 12' },
];

const clientLogosRow2 = [
  { src: Client13, alt: 'Client 13' },
  { src: Client14, alt: 'Client 14' },
  { src: Client15, alt: 'Client 15' },
  { src: Client16, alt: 'Client 16' },
  { src: Client17, alt: 'Client 17' },
  { src: Client18, alt: 'Client 18' },
  { src: Client19, alt: 'Client 19' },
  { src: Client20, alt: 'Client 20' },
  { src: Client21, alt: 'Client 21' },
  { src: Client22, alt: 'Client 22' },
  { src: Client23, alt: 'Client 23' },
  { src: Client24, alt: 'Client 24' },
  { src: Client25, alt: 'Client 25' },
];

const Testimonials = () => {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  useEffect(() => {
    const scrollContainers = [scrollRef1.current, scrollRef2.current];
    scrollContainers.forEach((scrollContainer) => {
      const logos = Array.from(scrollContainer.children);
      logos.forEach((logo) => {
        const clone = logo.cloneNode(true);
        scrollContainer.appendChild(clone);
      });
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen overflow-hidden bg-white px-8 md:px-16 relative translate-y-[10px] md:translate-y-[-12%]">
      <h2
        className="mb-8 text-center text-xl md:text-3xl font-semibold leading-tight tracking-wide text-[#212121]"
        style={{ fontFamily: Constants.fontFamilies.primary, lineHeight: '48px' }}
      >
        Bergabung Bersama Mereka Yang Telah Mempercayai <br />
        Layanan Kami
      </h2>
      <div className="w-full max-w-[1200px] mx-auto space-y-12 overflow-hidden relative">
        {/* Left Gradient Overlay */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        
        {/* Right Gradient Overlay */}
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        {/* Scrolling Content */}
        {[clientLogosRow1, clientLogosRow2].map((logos, index) => (
          <div
            key={index}
            ref={index === 0 ? scrollRef1 : scrollRef2}
            className={`flex gap-8 whitespace-nowrap animate-scroll-row-${index + 1}`}
          >
            {logos.map((client, idx) => (
              <img
                key={idx}
                src={client.src}
                alt={client.alt}
                className="w-20 md:w-24 lg:w-32 h-auto"
              />
            ))}
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes scroll-row-1 {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @keyframes scroll-row-2 {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-scroll-row-1 {
            animation: scroll-row-1 20s linear infinite;
          }
          .animate-scroll-row-2 {
            animation: scroll-row-2 25s linear infinite reverse;
          }
        `}
      </style>
    </div>
  );
};


export default Testimonials;
