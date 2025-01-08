import React from 'react';
import Constants from '../../../utils/Constants';
import { UsingBanner, Check } from '../../../assets';

const featureData = [
  {
    title: 'Resmi dan Legal',
  },
  {
    title: 'Cepat dan Praktis',
  },
  {
    title: 'Aman dan Terlacak',
  }
];

const Using = () => {
  
  return (
    <div className="container mx-auto bg-white py-12 px-4 sm:px-6 md:px-0 relative translate-y-[-10px] md:translate-y-[-200px] mb-8 max-w-screen-xl">
      <div className="container mx-auto text-center">        
        {/* Content */}
        <div className="container mx-auto px-4 py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-center translate-y-[-10px] md:translate-y-[-40px]">
        {/* Left Column - Image with Notification */}
        <div className="col-span-1 sm:col-span-7 px-4 sm:px-12 py-4 sm:py-8">
          {/* Header Text */}
          <div className="flex flex-col items-start text-start">
            <h4
              className="text-[Montserrat] font-[600] text-[#212121] text-sm sm:text-base md:text-2xl leading-snug"
              style={{
                letterSpacing: '0.05%',
              }}
            >
                Penggunaan Ideal {` `}
              <span
                style={{
                  fontWeight: Constants.weight.bold,
                  color: Constants.colors.ocean,
                }}
              >
                e-Materai:
              </span>
              {` `} Pada Jenis Dokumen Bisnis Anda
            </h4>
          </div>


          {/* Features List */}
          <ul className="mt-6 sm:mt-8 space-y-4 text-base sm:text-lg text-[#212121] w-full">
            {featureData.map((feature, index) => (
              <li key={index} className="flex items-center gap-4">
                <div
                  className="flex-shrink-0 flex items-center justify-center bg-[#A162F9]"
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '90px'
                  }}
                >
                  <img src={Check} alt="check" className="w-6 sm:w-7 h-6 sm:h-7" />
                </div>
                <div className="flex flex-col gap-2 text-center">
                  <p
                    className="text-sm sm:text-base md:text-lg text-black font-bold text-left"
                    style={{
                      fontFamily: Constants.fontFamilies.primary,
                      letterSpacing: '0.05%',
                      lineHeight: '33px',
                    }}
                  >
                    {feature.title}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Content */}
        <div className="col-span-1 sm:col-span-5 relative flex justify-center items-center">
          <img
            src={UsingBanner}
            alt="Main Image"
            className="w-[280px] sm:w-[320px] md:w-[548px] h-auto sm:h-[500px] md:h-[436px] object-contain"
          />
        </div>


      </div>
      </div>
    </div>
  );
}

export default Using
