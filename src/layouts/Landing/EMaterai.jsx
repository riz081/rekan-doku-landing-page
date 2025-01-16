import React from 'react';
import Constants from '../../utils/Constants';
import { EMateraiHero, WhatsApp } from '../../assets';

const EMaterai = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-12 py-4 min-h-screen flex flex-col md:grid md:grid-cols-2 gap-8 items-center translate-y-[-10px] md:translate-y-[-80px]">
      {/* Brand Info */}
      <div className="flex flex-col space-y-6 md:space-y-8 px-4">
        {/* Banner Text */}
        <div
          className="flex justify-center items-center text-white font-bold py-2 px-4 h-[45px] w-full sm:w-max sm:ml-0"
          style={{
            borderRadius: '8px',
            backgroundColor: Constants.colors.ocean,
          }}
        >
          <p
            className="text-center text-sm sm:text-base"
            style={{
              fontFamily: Constants.fontFamilies.primary,
            }}
          >
            #e-Materai Rekan Doku
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
            Pakai {` `}
            <span
              style={{
                fontWeight: Constants.weight.bold,
                color: Constants.colors.ocean,
              }}
            >
              e-Materai
            </span>
            {` `}Dengan Mudah dan Praktis
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
            Kami adalah salah satu distibutor resmi e-materai yang telah diakui oleh PERURI. 
            Bubuhkan dokumen digital Anda dengan e-Materai Rekan Doku. 
            Dengan e-Meterai Rekan Doku, dokumen Anda memiliki kekuatan hukum yang sah dan diakui oleh negara. 
            Proses penempelan meterai elektronik menjadi cepat, aman, dan dapat dilakukan kapan saja tanpa perlu cetak fisik.
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
              Beli e-Materai
            </span>
          </button>
        </div>
      </div>

      {/* Illustration */}
      <div className="relative mt-8 md:mt-0 flex justify-center">        
        {/* Main Image */}
        <img
          src={EMateraiHero}
          alt="Illustration"
          className="max-w-full w-[90%] sm:w-[75%] mx-auto"
        />
      </div>
    </div>
  );
};

export default EMaterai;
