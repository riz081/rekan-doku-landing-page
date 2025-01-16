import React from 'react';
import { MessageIcon, GuardIcon, BoardIcon } from '../../assets';
import Constants from '../../utils/Constants';

const Help = () => {
  const services = [
    {
      icon: MessageIcon,
      title: 'Konsultasi Sekarang',
      description: 'Sampaikan pesan Anda langsung dengan konsultan terbaik Kami',
    },
    {
      icon: GuardIcon,
      title: 'Trial Sekarang',
      description: 'Pahami kebutuhan digital Anda dengan coba gratis sekarang',
    },
    {
      icon: BoardIcon,
      title: 'Jadwalkan Demo',
      description: 'Tentukan waktu atau jadwal pertemuan Anda dengan tim Rekan Doku',
    },
  ];

  return (
    <div className="bg-[#ffffff] my-[6rem] px-4 sm:px-8 lg:px-16">
      <div className="text-center mb-12">
        <h2 
          className="text-2xl md:text-[40px] font-[600] text-[#212121]" 
          style={{
            letterSpacing: '0.05%',
            lineHeight: '60px',
            fontFamily: Constants.fontFamilies.primary,
          }}
        >
          Apa yang bisa <span className="text-[#5B59E8]">Rekan Doku</span> Bantu Untuk Anda?
        </h2>
        <p 
          className="text-[#212121] mt-4 text-[16px] sm:text-[18px] md:text-[20px] font-[400]" 
          style={{
            fontFamily: Constants.fontFamilies.primary,
            letterSpacing: '0.05%',
            lineHeight: '30px',
          }}
        >
          Pahami lebih mendalam bagaimana kebutuhan tanda tangan digital <br className="hidden sm:block" /> 
          Anda melalui Rekan Doku
        </p>
      </div>

      {/* Images Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full max-w-[314px] h-auto pt-[60px] px-[10px] pb-[24px] rounded-t-[180px] rounded-b-[14px] bg-gradient-to-br from-[#B964FF] to-[#2154D5] text-white flex flex-col items-center"
          >
            <div className="p-4 rounded-full w-[136px] h-[113px] mb-5">
              <img src={service.icon} alt={service.title} className="w-15 h-15" />
            </div>
            <div
              className='bg-[#ffffff] rounded-[8px] w-[230px] h-[54px] p-4 text-center cursor-pointer hover:bg-[#f0f0f0] hover:scale-105 hover:shadow-lg transition-all duration-300'
              onClick={() => console.log(`${service.title} clicked`)} // Ganti dengan fungsi yang sesuai
            >
              <p
                className="text-[#2154D5] text-[16px] font-[600] mb-4"
                style={{
                  lineHeight: '19.2px',
                  letterSpacing: '0.05%',
                  fontFamily: Constants.fontFamilies.primary,
                }}
              >
                {service.title}
              </p>
            </div>
            <p 
              className="text-white text-[14px] font-[400] text-center mt-4"
              style={{
                fontFamily: Constants.fontFamilies.primary,
                letterSpacing: '0.05%',
                lineHeight: '21px',
              }}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
