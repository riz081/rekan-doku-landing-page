import React, { useEffect, useRef } from 'react';
import Constants from '../../utils/Constants';
import { productCards } from '../../data/mock/productData';

const Product = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;

      // Gandakan data untuk menciptakan ilusi infinite scroll
      const clonedCards = container.innerHTML;
      container.innerHTML += clonedCards;
    }

    const scrollInterval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;

        // Lanjutkan scroll
        container.scrollBy({
          left: 300,
          behavior: 'smooth',
        });

        // Jika sudah mendekati akhir, reset posisi scroll secara instan ke awal
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
    }, 2700);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="container mx-auto bg-gray-50 py-12 px-4 sm:px-6 md:px-12 relative translate-y-[-10px] md:translate-y-[-200px] mb-8 max-w-screen-xl">
      <div className="container mx-auto text-center">
        {/* Judul dan Deskripsi */}
        <h2
          className="mb-4 text-xl sm:text-2xl md:text-3xl font-semibold leading-snug"
          style={{
            fontFamily: Constants.fontFamilies.primary,
            color: Constants.colors.black,
          }}
        >
          Solusi Terbaik Bersama{' '}
          <span
            className="font-bold"
            style={{
              fontFamily: Constants.fontFamilies.primary,
              color: Constants.colors.primary,
            }}
          >
            Rekan Doku
          </span>
        </h2>

        <div className="px-2 sm:px-6 md:px-36">
          <p
            className="mb-12 text-sm sm:text-base font-normal leading-relaxed"
            style={{
              fontFamily: Constants.fontFamilies.primary,
              color: Constants.colors.black,
            }}
          >
            Dari tanda tangan elektronik hingga manajemen dokumen, RekanDoku
            menghadirkan kemudahan dalam setiap langkah, membantu bisnis Anda
            bergerak lebih cepat dan efisien.
          </p>
        </div>

        {/* Card Container */}
        <div className='flex justify-center'>
          <div
            ref={scrollContainerRef}
            className="overflow-x-scroll scrollbar-hide flex space-x-4 px-2 sm:px-4 py-6"
          >
            {productCards.map((card, index) => (
              <div
                key={index}
                className={`bg-white shadow-md rounded-lg p-4 sm:p-6 min-w-[280px] sm:min-w-[350px] md:min-w-[517px] transform transition duration-500 hover:scale-105 flex flex-col ${
                  index < 3 ? 'opacity-100' : 'opacity-90'
                }`}
                style={{
                  boxShadow: '0px 4px 4px 0px #00000040',
                }}
              >
                {/* Header Row */}
                <div className="grid grid-cols-12 gap-4 mb-4">
                  <h3 className="col-span-8 text-sm sm:text-base md:text-xl font-semibold text-gray-800 text-left">
                    {card.title}
                  </h3>
                  <div className="col-span-4 flex justify-end">
                    <div
                      className="w-12 h-12 sm:w-[93px] sm:h-[93px] relative"
                      style={{
                        borderRadius: '50%',
                        background:
                          'linear-gradient(270deg, #3257DA -73.39%, #A162F9 126.61%)',
                      }}
                    >
                      <img
                        src={card.icon}
                        alt={card.title}
                        className="h-8 w-8 sm:h-16 sm:w-16 absolute transform -translate-x-[10%] translate-y-[8%]"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Row */}
                <div className="flex-grow mb-6">
                  <p className="text-xs sm:text-sm text-gray-600 text-left">
                    {card.description}
                  </p>
                </div>

                {/* Footer Row */}
                <div className="mt-auto">
                  <a
                    href="#"
                    className="text-blue-500 font-semibold hover:underline flex justify-start items-center"
                  >
                    {card.link} <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
