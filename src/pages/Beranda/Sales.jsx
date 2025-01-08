import React from 'react';
import { SalesHero, WhatsApp } from '../../assets';

const Sales = () => {
  return (
    <div className="flex justify-center items-center bg-white-100 min-h-screen translate-y-[-10px] md:translate-y-[40px] px-4">
      <div className="flex flex-col md:flex-row bg-gray-200 w-full max-w-screen-lg h-auto md:h-[576px] rounded-lg shadow-lg overflow-hidden p-8">
        <div className="flex items-start gap-8 mt-12 flex-col md:flex-row">
            <div className="relative flex-shrink-0 w-full md:w-[460px]">
                <img
                    src={SalesHero}
                    alt="Sales Hero"
                    className="w-full h-auto object-contain border border-gray-200 rounded-[24px]"
                    style={{  
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                    }}
                />
            </div>
            <div className="flex flex-col justify-start w-full md:w-2/3 mt-6 md:mt-0">
              <h2 className="font-[Montserrat] text-2xl md:text-3xl font-semibold text-[#212121] mb-6">
                  Dorong pertumbuhan bisnis Anda ke level berikutnya bersama{' '}
                  <span className="text-[#5B59E8]">Rekan Doku</span>
              </h2>
              <p className="font-[Montserrat] text-[#212121] mb-8 leading-relaxed text-sm md:text-md">
                  Dengan solusi autentikasi dokumen yang andal, Anda dapat menyelesaikan
                  lebih banyak pekerjaan secara efisien tanpa mengorbankan ketepatan dan
                  kecepatan. Rekan Doku telah dipercaya oleh ribuan bisnis untuk memastikan
                  proses administrasi berjalan lancar, aman, dan sesuai dengan standar hukum.
              </p>
              <div className="flex flex-col md:flex-row gap-6">
                <button className="font-[Montserrat] text-sm border-2 font-[500] border-gray-300 text-[#112C6F] px-6 py-3 rounded-lg hover:bg-[#112C6F] hover:border-[#112C6F] hover:text-white transition duration-300 flex items-center gap-2">
                  <img src={WhatsApp} alt="WhatsApp Icon" className="w-6 h-6 border-gray-100" />
                  Hubungi Sales
                </button>

                <button className="font-[Montserrat] text-sm bg-gradient-to-r from-[#B964FF] via-[#6E59FF] to-[#2154D5] font-[600] text-white px-6 py-3 rounded-lg hover:opacity-80 transition duration-300 mt-4 md:mt-0">
                  Coba Gratis Sekarang
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
