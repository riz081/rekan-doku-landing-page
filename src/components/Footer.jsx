import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaRegCopyright } from 'react-icons/fa';
import { Ojk, Dukcapil, Kominfo, LogoFooter } from '../assets';

const fiturLinks = [
  { name: "e-Meterai", href: "#" },
  { name: "e-Sign", href: "#" },
  { name: "e-Sign + e-Meterai", href: "#" },
  { name: "Corporate Business", href: "#" },
];

const productLinks = [
  { name: "Rekan AI", href: "#" },
  { name: "Rekan Veri", href: "#" },
  { name: "Rekan HR", href: "#" },
  { name: "Rekan LLM", href: "#" },
];

const contactLinks = [
  { name: "Contact Support", href: "#" },
  { name: "Email", href: "#" },
  { name: "FAQ", href: "#" },
];

const partnerLogos = [
  { src: Ojk, alt: "OJK", label: "OJK" },
  { src: Kominfo, alt: "Kominfo", label: "Kominfo" },
  { src: Dukcapil, alt: "Dukcapil", label: "Dukcapil" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#112C6F] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 px-4 sm:px-10">
        
        {/* Logo and Social Media - col-span-1 */}
        <div className="flex flex-col items-start mb-8 sm:mb-0">
          <div className="flex items-center mb-4">
            <img src={LogoFooter} alt="Rekan Doku Logo" className="h-18 w-auto" />
            <span 
              className="ml-2 text-xl font-semibold text-[#ffffff] text-[Montserrat]"
              style={{ 
                textShadow: '0px 2px 4px rgba(86, 224, 234, 0.25)',
                lineHeight: '24px',
                letterSpacing: '0.005em'
              }}
            >
              Rekan Doku
            </span>
          </div>
          <div className="flex space-x-4 mt-8 gap-2">
            <a href="#" className="text-[#ffffff] hover:text-gray-300">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" className="text-[#ffffff] hover:text-gray-300">
              <FaFacebook className="text-xl" />
            </a>
            <a href="#" className="text-[#ffffff] hover:text-gray-300">
              <FaTwitter className="text-xl" />
            </a>
          </div>
        </div>

        {/* Fitur Section - col-span-1 */}
        <div>
          <h4 className="text-[Montserrat] text-[18px] font-[600] text-[#ffffff] mb-4" style={{ lineHeight: '28px', letterSpacing: '0.05%' }}>Fitur</h4>
          <ul className="space-y-2">
            {fiturLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-[Montserrat] text-[#ffffff] font-[400] text-[16px] hover:text-gray-300" style={{ lineHeight: '26px', letterSpacing: '0.05%' }}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Produk Layanan Lainnya - col-span-1 */}
        <div>
          <h4 className="text-[Montserrat] text-[18px] font-[600] text-[#ffffff] mb-4" style={{ lineHeight: '28px', letterSpacing: '0.05%' }}>Produk Layanan Lainnya</h4>
          <ul className="space-y-2">
            {productLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-[Montserrat] text-[#ffffff] font-[400] text-[16px] hover:text-gray-300" style={{ lineHeight: '26px', letterSpacing: '0.05%' }}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hubungi Kami - col-span-1 */}
        <div>
          <h4 className="text-[Montserrat] text-[18px] font-[600] text-[#ffffff] mb-4" style={{ lineHeight: '28px', letterSpacing: '0.05%' }}>Hubungi Kami</h4>
          <ul className="space-y-2 mb-6">
            {contactLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-[Montserrat] text-[#ffffff] font-[400] text-[16px] hover:text-gray-300" style={{ lineHeight: '26px', letterSpacing: '0.05%' }}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Partners - col-span-1 */}
        <div>
          <div className="flex gap-4 mb-4 flex-wrap justify-center sm:justify-start">
            {partnerLogos.map((partner, index) => (
              <div key={index} className="flex flex-col items-center mb-4">
                <div className="w-[74px] h-[74px] bg-white rounded-full p-[21px_14px_22px_14px] flex items-center justify-center mb-2">
                  <img src={partner.src} alt={partner.alt} className="w-10 h-10" />
                </div>
                <span className="font-['Montserrat'] text-[12px] font-bold leading-[24px] tracking-[0.005em] text-center text-white">
                  {partner.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center sm:text-right mt-8 sm:mr-[11%]">
        <p className="text-[Montserrat] text-[#ffffff] font-[400] text-[14px] flex items-center justify-center sm:justify-end gap-1 flex-wrap" style={{ lineHeight: '21px', letterSpacing: '0.05%' }}>
          <FaRegCopyright className="text-[14px] mr-1" />
          <span>2025 Rekan AI. Seluruh hak cipta dilindungi undang-undang.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;