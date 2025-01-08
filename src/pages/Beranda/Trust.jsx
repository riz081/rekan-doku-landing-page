import React from 'react';
import { Bubble2, CustService, DocuIcon, FileDownload, Check } from '../../assets'; // Add your icons to assets folder
import { IoClose } from 'react-icons/io5';
import Constants from '../../utils/Constants';

const Trust = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-center translate-y-[-10px] md:translate-y-[-140px]">
      {/* Left Column - Image with Notification */}
      <div className="col-span-1 sm:col-span-5 relative flex justify-center items-center">
        <img
          src={CustService}
          alt="Main Image"
          className="w-[280px] sm:w-[320px] md:w-[400px] h-auto sm:h-[500px] md:h-[602px] object-contain"
        />

        {/* Chat Bubble */}
        <div
          className="absolute top-8 left-[1%] sm:left-[28%] bg-white shadow-lg rounded-xl p-3 sm:p-4 w-full sm:w-[414px] h-[20%] sm:h-[92px] flex justify-between items-center"
          style={{
              border: '1px solid #E0E0E0',
              boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
          }}
        >
          <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Icon/Avatar */}
              <div className="w-[32%] h-[32%] sm:w-24 sm:h-24 rounded-full flex items-center justify-center">
                  <img
                    src={Bubble2}
                    alt="Avatar"
                    className="w-[90%] h-[90%] sm:w-12 sm:h-12 object-cover rounded-full"
                  />
              </div>
              {/* Text Content */}
              <div className="pr-2 sm:pr-3 pb-2 sm:pb-3">
                <p
                  className="text-xs sm:text-base font-semibold my-1 sm:my-2"
                  style={{
                    fontFamily: Constants.fontFamilies.primary,
                    color: Constants.colors.black,
                    lineHeight: '18px',
                    letterSpacing: '0.5%',
                    fontSize: Constants.fontSizes.small
                  }}
                >
                    Pilihan tersedia sesuai kebutuhan!
                </p>
                <p
                  className="text-[10px] sm:text-sm"
                  style={{
                      fontFamily: Constants.fontFamilies.primary,
                      color: Constants.colors.black,
                      lineHeight: '15px',
                      letterSpacing: '0.5%',
                      fontSize: Constants.fontSizes.xsmall
                  }}
                >
                    Anda dapat memilih jenis kebutuhan layanan untuk berbagai dokumen yang legal dan terpercaya.
                </p>
              </div>
          </div>
          <button
            className="text-gray-500 hover:text-gray-700 transition -mt-8 sm:-mt-12 -mr-1 sm:-mr-2"
            aria-label="Close"
          >
              <IoClose size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Icon Section */}
        <div className="absolute top-[27%] left-[60%] sm:left-[67%] gap-6 sm:gap-8 flex flex-col space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-2">
                <img 
                    src={DocuIcon} 
                    alt="Document Icon" 
                    className="w-14 sm:w-28 h-14 sm:h-28" 
                />
            </div>
            <div className="flex items-center space-x-2 pl-3 sm:pl-9">
                <img 
                    src={FileDownload} 
                    alt="File Upload Icon" 
                    className="w-15 sm:w-15 h-15 sm:h-15" 
                />
            </div>
        </div>

      </div>

      {/* Right Column - Content */}
      <div className="col-span-1 sm:col-span-7 px-4 sm:px-12 py-4 sm:py-8">
        {/* Header Text */}
        <div className="flex flex-col gap-4">
          <h2
            className="text-lg sm:text-2xl md:text-3xl font-semibold leading-snug"
            style={{
              fontFamily: Constants.fontFamilies.primary,
              color: Constants.colors.black,
              lineHeight: '48px',
              letterSpacing: '0.5%',
            }}
          >
            Autentikasi dokumen jadi lebih mudah, aman, dan legal dengan tanda
            tangan digital terpercaya.
            <span 
              className="text-white mx-3 w-[200px] h-[46px] px-5 py-3 rounded-[16px] bg-gradient-to-r from-[#5B59E8] to-[#56E0EA] text-xs"
            >
              Fitur Produk <strong>#REKAN DOKU</strong> untuk Bisnis Anda
            </span>
          </h2>
        </div>

        {/* Features List */}
        <ul className="mt-6 sm:mt-14 space-y-4 text-base sm:text-lg text-gray-700">
          {[
            'Document e-Sign + e-Meterai',
            'Document Management',
            'Document OCR (Coming soon...)',
          ].map((feature, index) => (
            <li key={index} className="flex items-center space-x-4">
              <div
                className="flex items-center justify-center"
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '90px',
                  background: Constants.gradient.primary,
                }}
              >
                <img src={Check} alt="check" className="w-6 sm:w-7 h-6 sm:h-7" />
              </div>
              <p
                className="text-sm sm:text-base md:text-lg text-black font-bold"
                style={{
                  fontFamily: Constants.fontFamilies.primary,
                  letterSpacing: '0.05%',
                  lineHeight: '33px',
                }}
              >
                {feature}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Trust;
