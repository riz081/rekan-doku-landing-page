import React from 'react';
import { Bubble2, SolutionHero, Check } from '../../assets'; // Add your icons to assets folder
import { IoClose } from 'react-icons/io5';
import Constants from '../../utils/Constants';

const Step = () => {

  // Data List Fitur
  const features = [
    {
      title: 'Unggah Dokumen',
      description: 'Pilih dokumen yang ingin Anda autentikasi.',
    },
    {
      title: 'Tandatangani Secara Digital',
      description: 'Gunakan tanda tangan digital yang terverifikasi untuk menandai dokumen Anda.',
    },
    {
      title: 'Bagikan dan Simpan',
      description:
        'Dokumen yang telah ditandatangani bisa langsung dibagikan dan tersimpan di cloud.',
    },
  ];

  return (
    <div className="container mx-auto px-8 py-8 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-center translate-y-[-10px] md:translate-y-[-20px] translate-x-[-1%]">
      {/* Left Column - Image with Notification */}
      <div className="col-span-1 sm:col-span-7 px-4 sm:px-12 py-4 sm:py-8">
        {/* Header Text */}
        <div className="flex flex-col gap-4">
            <h2
                style={{
                    fontFamily: Constants.fontFamilies.primary,
                    fontSize: Constants.fontSizes.heading,
                    fontWeight: Constants.weight.semibold,
                    lineHeight: Constants.size.large,
                    letterSpacing: '0.05%',
                    textAlign: 'left',
                    textUnderlinePosition: 'from-font',
                    textDecorationSkipInk: 'none'
                }}
            >
                Bagaimana Cara Kerja Dokumen Anda di{' '}
                <span
                    style={{
                        fontFamily: Constants.fontFamilies.primary,
                        fontSize: Constants.fontSizes.heading,
                        fontWeight: Constants.weight.bold,
                        lineHeight: Constants.size.large,
                        color: Constants.colors.primary,
                        letterSpacing: '0.05%',
                        textAlign: 'left',
                        textUnderlinePosition: 'from-font',
                        textDecorationSkipInk: 'none',
                        boxShadow: '0px 1px 4px 0px #5B59E840'
                    }}
                >
                    Rekan Doku
                </span>
                ?
            </h2>
        </div>


        {/* Features List */}
        <ul className="mt-6 sm:mt-14 space-y-6">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-4">
                <div
                    className="flex items-center justify-center w-[52px] h-[52px] sm:w-[40px] sm:h-[40px]"
                    style={{
                        borderRadius: '50%',
                        background: Constants.gradient.primary,
                    }}
                >
                    <img src={Check} alt="check" className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                <div className='pl-3'>
                    <p
                      className="text-sm sm:text-base text-black font-bold"
                      style={{
                        fontFamily: Constants.fontFamilies.primary,
                        lineHeight: '24px',
                      }}
                    >
                      {feature.title}
                    </p>
                    <p
                    className="text-sm sm:text-base text-gray-500"
                    style={{
                        fontFamily: Constants.fontFamilies.primary,
                        lineHeight: '20px',
                    }}
                    >
                    {feature.description}
                    </p>
                </div>
                </li>
            ))}
        </ul>

      </div>

      {/* Right Column - Content */}
      <div className="col-span-1 left-[8%] sm:col-span-5 relative flex justify-start items-center pl-0 sm:pl-8">
        <img
          src={SolutionHero}
          alt="Solution Image"
          className="w-78 sm:w-min-[292px] h-auto sm:h-min-[602px]"
        />

        {/* Chat Bubble */}
        <div
          className="absolute top-[-9%] sm:top-[32%] left-[-5%] sm:left-[-45%] bg-white shadow-lg rounded-xl p-3 sm:p-4 w-full sm:w-[479px] h-[38%] sm:h-[92px] flex justify-between items-center"
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
                    Kecepatan luar biasa kelola dokumen Anda!
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
                    Hanya perlu hitungan detik Anda dapat memproses dokumen perusahaan melalui berbagai fitur Rekan Doku.
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
      </div>
    </div>
  );
};

export default Step;
