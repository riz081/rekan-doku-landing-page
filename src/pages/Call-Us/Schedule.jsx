import React from 'react';
import { ScheduleBanner } from '../../assets';

const Schedule = () => {
  const formLabels = [
    'Nama Lengkap',
    'Nama Perusahaan',
    'Email Perusahaan',
    'Nomor Telepon',
    'Kebutuhan',
  ];

  const formData = [
    { type: 'text', placeholder: 'Nama Lengkap' },
    { type: 'text', placeholder: 'Nama Perusahaan' },
    { type: 'email', placeholder: 'Email Perusahaan' },
    { type: 'tel', placeholder: 'Nomor Telepon' },
    { type: 'select', options: ['Kebutuhan', 'Konsultasi', 'Demo', 'Lainnya'] },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-white-100 min-h-screen px-4 lg:px-16 py-8">
      <div className='bg-[#E0E4EC] rounded-[45px] w-full lg:max-w-[1728px] h-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-6 lg:py-12 gap-8'>
        {/* Form Section */}
        <div className="bg-transparent w-full max-w-sm lg:max-w-lg mb-8 lg:mb-0 lg:translate-x-[3em] translate-x-[1em]">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed text-center lg:text-left">
            Jadwalkan Demo Tim Anda <br />
            dengan <span className="text-purple-500">Rekan Doku</span>
          </h2>
          <form className="mt-6">
            <div className="flex flex-col gap-4">
              {formData.map((field, index) => (
                <div key={index}>
                  <label className="block mb-2 font-medium text-gray-700">{formLabels[index]}</label>
                  {field.type === 'select' ? (
                    <select className="border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full">
                      {field.options.map((option, idx) => (
                        <option key={idx} value={option.toLowerCase()}>{option}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
                    />
                  )}
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="mt-6 bg-purple-500 text-white rounded-md p-4 w-full hover:bg-purple-600 transition"
            >
              Kirim Sekarang
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="relative flex items-center justify-center w-full max-w-sm lg:max-w-lg lg:translate-x-[-3em] translate-x-[-1em]">
          {/* Image */}
          <img
            src={ScheduleBanner}
            alt="Customer Support"
            className="relative z-10 w-full h-auto object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
