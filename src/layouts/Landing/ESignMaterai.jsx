import React from 'react';
import Constants from '../../utils/Constants';
import { SignMateraiHero } from '../../assets';

const ESignMaterai = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-12 py-4 min-h-screen flex flex-col md:grid md:grid-cols-2 gap-8 items-center translate-y-[-10px] md:translate-y-[-80px]">
      {/* Brand Info */}
      <div className="flex flex-col space-y-6 md:space-y-8 px-4">
        {/* Banner Text */}
        <div
          className="flex justify-center items-center text-white font-bold py-2 px-4 h-[45px] w-full sm:w-max sm:ml-0 bg-[#5B59E8]"
          style={{
            borderRadius: '8px',
          }}
        >
          <p
            className="text-center text-sm sm:text-base"
            style={{
              fontFamily: Constants.fontFamilies.primary,
            }}
          >
            #e-Materai + e-Sign Rekan Doku
          </p>
        </div>


        {/* Content Section */}
        <div className="space-y-4 text-center md:text-left">
          <h1
            className="text-gray-900 text-lg sm:text-xl md:text-3xl leading-snug"
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
              e-Materai + e-Sign:
            </span>
            {` `}Autentikasi Dokumen Lengkap dalam Satu Platform
          </h1>

          <p
            className="text-sm sm:text-base max-w-full sm:max-w-md md:max-w-lg mx-auto md:mx-0"
            style={{
              fontFamily: Constants.fontFamilies.primary,
              fontSize: Constants.fontSizes.medium,
              fontWeight: Constants.weight.regular,
              letterSpacing: '0.5%',
              color: Constants.colors.black,
            }}
          >
            RekanDoku menghadirkan solusi menyeluruh dengan integrasi e-Meterai dan e-Sign dalam satu platform. 
            Kombinasi ini memastikan dokumen tidak hanya memiliki tanda tangan digital yang sah, tetapi juga distempel dengan meterai elektronik resmi, memberikan legalitas ganda yang diakui pemerintah.
          </p>
        </div>

        {/* Button Section */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <button
            className="flex items-center justify-center gap-3 bg-white text-[#5B59E8] font-medium w-full sm:w-[270px] h-[55px] px-8 rounded-[14px] border border-[#5B59E8] transition"
          >
            <span className="font-montserrat text-lg">
              Bubuhkan Dokumen
            </span>
          </button>

          <button
            className="flex items-center justify-center bg-gradient-to-r from-[#B964FF] to-[#2154D5] text-white font-medium w-full sm:w-[270px] h-[55px] px-8 rounded-[14px] transition"
          >
            <span className="font-montserrat text-lg">
              e-Sign + e-Materai
            </span>
          </button>
        </div>
      </div>

      {/* Illustration */}
      <div className="relative mt-8 md:mt-0 flex justify-center">        
        {/* Main Image */}
        <img
          src={SignMateraiHero}
          alt="Illustration"
          className="max-w-full w-[90%] sm:w-[75%] mx-auto"
        />
      </div>
    </div>
  );
};

export default ESignMaterai;
