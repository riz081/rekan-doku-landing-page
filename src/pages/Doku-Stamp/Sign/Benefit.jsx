import React from 'react';
import Constants from '../../../utils/Constants';
import { BenefitBanner, Check } from '../../../assets';

const featureData = [
  {
    title: 'Resmi dan Legal',
    desc: 'Dokumen yang ditandatangani secara digital memiliki kekuatan hukum yang sama dengan tanda tangan konvensional'
  },
  {
    title: 'Cepat dan Praktis',
    desc: 'Proses penandatanganan dokumen dapat dilakukan dimana saja dan kapan saja'
  },
  {
    title: 'Aman dan Terlacak',
    desc: 'Setiap dokumen yang ditandatangani memiliki jejak digital yang dapat dilacak dan diverifikasi'
  }
];

const Benefit = () => {
  
  return (
    <div className="container mx-auto bg-white py-12 px-4 sm:px-6 md:px-0 relative translate-y-[-10px] md:translate-y-[-200px] mb-8 max-w-screen-xl">
      <div className="container mx-auto text-center">
        {/* Judul dan Deskripsi */}
        <h1 className="mb-4 text-xl sm:text-2xl md:text-[32px] font-[600] leading-snug">
          Keunggulan e-Materai{' '}
          <span className="font-bold text-[#5B59E8]">
            Rekan Doku
          </span>
        </h1>

        <div className="px-2 sm:px-6 md:px-36">
          <p className="mb-12 text-sm sm:text-[18px] font-[Montserrat] font-[400] leading-relaxed">
            RekanDoku menawarkan e-Meterai yang mempermudah proses legalisasi dokumen secara digital, tanpa perlu repot mencari meterai fisik. 
            Dengan e-Meterai, dokumen Anda menjadi sah dan memiliki kekuatan hukum sesuai peraturan pemerintah.
          </p>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-center translate-y-[-10px] md:translate-y-[10px]">
        {/* Left Column - Image with Notification */}
        <div className="col-span-1 sm:col-span-5 relative flex justify-center items-center">
          <img
            src={BenefitBanner}
            alt="Main Image"
            className="w-[280px] sm:w-[320px] md:w-[548px] h-auto sm:h-[500px] md:h-[436px] object-contain"
          />
        </div>

        {/* Right Column - Content */}
        <div className="col-span-1 sm:col-span-7 px-4 sm:px-12 py-4 sm:py-8">
          {/* Header Text */}
          <div className="flex flex-col items-start text-start">
            <h4
              className="text-[#212121] text-sm sm:text-base md:text-2xl leading-snug"
              style={{
                fontFamily: Constants.fontFamilies.primary,
                fontWeight: Constants.weight.semibold,
                letterSpacing: '0.5%',
              }}
            >
              <span
                style={{
                  fontWeight: Constants.weight.bold,
                  color: Constants.colors.ocean,
                }}
              >
                e-Materai:
              </span>
              {` `}Kepastian Hukum dalam Setiap Dokumen
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
                <div className="flex flex-col gap-1 text-start">
                  <p
                    className="text-[20px] sm:text-base md:text-lg text-[#212121] font-[600] text-left"
                    style={{
                      fontFamily: Constants.fontFamilies.primary,
                      letterSpacing: '0.05%',
                      lineHeight: '33px',
                    }}
                  >
                    {feature.title}
                  </p>
                  <p className="text-[Montserrat] text-[16px] font-[400] text-[#212121] ">{feature.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>


      </div>
      </div>
    </div>
  );
}

export default Benefit
