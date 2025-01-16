import React from 'react';
import Constants from '../../utils/Constants';
import { Hero, WhatsApp, Bubble } from '../../assets';
import { IoClose } from 'react-icons/io5';

const Home = () => {
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
            Solusi Manajemen Dokumen{' '}
            <span className="text-white">#Cerdas</span> untuk Bisnis Anda
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
            Sederhanakan, Amankan, dan Tingkatkan Efisiensi Kerja Anda dengan{' '}
            <span
              style={{
                fontWeight: Constants.weight.bold,
                color: Constants.colors.ocean,
              }}
            >
              Rekan Doku
            </span>
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
            Kelola dan autentikasi dokumen Anda dengan cara yang lebih pintar
            dan aman. RekanDoku hadir untuk mempermudah bisnis Anda dengan
            solusi dokumen digital yang legal, efisien, dan terpercaya.
          </p>
        </div>

        {/* Button Section */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <button
            className="flex items-center gap-3 bg-white text-[#112C6F] font-semibold transition w-full sm:w-auto"
            style={{
              maxWidth: '270px',
              height: '55px',
              padding: '20px 37px',
              borderRadius: '14px',
              border: '1px solid #5B59E8',
            }}
          >
            <img src={WhatsApp} alt="WhatsApp Icon" className="w-6 h-6" />
            <span
              style={{
                fontFamily: Constants.fontFamilies.primary,
                fontSize: Constants.fontSizes.semiLarge,
                fontWeight: Constants.weight.medium,
              }}
            >
              Hubungi Kami
            </span>
          </button>

          <button
            className="bg-gradient-to-r from-[#6439FF] to-[#4F75FF] text-white font-semibold transition w-full sm:w-auto"
            style={{
              maxWidth: '276px',
              height: '55px',
              padding: '23px 27px',
              borderRadius: '14px',
              background: Constants.gradient.tertiary,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontFamily: Constants.fontFamilies.primary,
                fontSize: Constants.fontSizes.semiLarge,
                fontWeight: Constants.weight.medium,
                color: Constants.colors.white,
              }}
            >
              Coba Gratis Sekarang
            </span>
          </button>
        </div>
      </div>

      {/* Illustration */}
      <div className="relative mt-8 md:mt-0 flex justify-center">        
        {/* Chat Bubble */}
        <div
          className="absolute top-[14%] left-[1%] sm:left-[1%] bg-white shadow-lg rounded-xl p-3 sm:p-4 w-full sm:w-[414px] h-[30%] sm:h-[92px] flex justify-between items-center"
          style={{
            border: '1px solid #E0E0E0',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
          }}
        >
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="w-[32%] h-[32%] sm:w-24 sm:h-24 rounded-full flex items-center justify-center">
              <img
                src={Bubble}
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
                    Tanda tangan lebih mudah dimana saja!
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
                    Kelola dan autentikasi dokumen Anda dengan cara yang lebih
                    pintar dan aman.
                </p>
              </div>
          </div>
          <button
            className="text-gray-500 hover:text-gray-700 transition -mt-8 sm:-mt-12 -mr-1 sm:-mr-2"
            aria-label="Close"
          >
            <IoClose size={24} />
          </button>
        </div>

        {/* Main Image */}
        <img
          src={Hero}
          alt="Illustration"
          className="max-w-full w-[90%] sm:w-[75%] mx-auto"
        />
      </div>
    </div>
  );
};

export default Home;
