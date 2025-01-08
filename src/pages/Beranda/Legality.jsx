import React from 'react';
import Constants from '../../utils/Constants';
import { 
  Ojk,
  Dukcapil,
  Kominfo,
  Check
 } from '../../assets';

 const legalItems = [
  {
    id: 1,
    image: Ojk,
    title: "OJK",
    subtitle: 'Otoritas Jasa Keuangan' ,
    description: "Memastikan dokumen dalam sektor keuangan memiliki legalitas dan perlindungan hukum."
  },
  {
    id: 2,
    image: Kominfo,
    title: "Kominfo PSeR",
    subtitle: 'Penyelenggara e-Sertifikasi' ,
    description: "Memastikan dokumen dalam sektor keuangan memiliki legalitas dan perlindungan hukum."
  },
  {
    id: 3,
    image: Dukcapil,
    title: "Dukcapil",
    subtitle: 'TTE IKD Dukcapil' ,
    description: "Memastikan dokumen dalam sektor keuangan memiliki legalitas dan perlindungan hukum."
  }
];

const Legality = () => {

  return (
    <div className="bg-white text-black py-16 translate-y-[-10px] md:translate-y-[20px]">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="font-[Montserrat] text-4xl font-semibold leading-[48px] tracking-[0.005em] text-center text-underline-position-[from-font] text-decoration-skip-ink-none">
              Solusi Sah Secara Hukum
            </h2>
            <div className="flex items-center justify-center w-[52px] h-[52px] sm:w-[40px] sm:h-[40px] bg-green-500 rounded-full">
              <img src={Check} alt="check" className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
          <p className="font-[Montserrat] text-lg font-normal leading-7 tracking-[0.005em] text-center text-underline-position-[from-font] text-decoration-skip-ink-none">
            Tanda tangan digital yang sah secara hukum dan memiliki kekuatan mengikat dalam proses perjanjian atau transaksi.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12">
          {legalItems.map((item) => (
            <div 
              key={item.id}
              className="flex flex-col items-center px-4 py-8 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-6 w-[269px] h-[279px] px-5 py-12">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="font-[Montserrat] text-2xl font-bold leading-[42px] tracking-[0.005em] text-left text-underline-position-[from-font] text-decoration-skip-ink-none mb-4">
                {item.title}
              </p>
              <p className="font-[Montserrat] text-lg font-medium leading-[30px] tracking-[0.005em] text-center text-underline-position-[from-font] text-decoration-skip-ink-none mb-4">
                {item.subtitle}
              </p>
              <p className="font-[Montserrat] text-lg font-normal leading-[30px] tracking-[0.005em] text-center text-underline-position-[from-font] text-decoration-skip-ink-none">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Legality;
