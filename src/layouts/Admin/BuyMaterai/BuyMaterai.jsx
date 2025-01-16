import React, { useState } from 'react';
import NavigationTabs from '../../../components/NavigationTabs'; // Import the new component
import { Quota, generateQuota } from '../../../components';
import Constants from '../../../utils/Constants';
import { Check } from '../../../assets';

const eMateraiItems = [
  { count: 1, keping: 1, price: 12000 },
  { count: 2, keping: 2, price: 24000 },
  { count: 3, keping: 3, price: 36000 },
  { count: 5, keping: 5, price: 60000 },
  { count: 10, keping: 10, price: 120000 },
];

const BuyMaterai = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [quota, setQuota] = useState(generateQuota());

  const handlePress = (item) => {
    setSelectedItem((prevSelectedItem) =>
      prevSelectedItem?.count === item.count ? null : item
    );
  };

  return (
    <div className="p-4 md:p-8 lg:p-12 bg-white-100 min-h-screen">
      {/* Header Section */}
      <Quota quota={quota} />
      {/* Navigation Tabs */}
      <NavigationTabs />

      {/* Purchase Options */}
      <h1
        className="font-[400] text-[16px] text-[#112C6F] my-4"
        style={{
          fontFamily: Constants.fontFamilies.primary,
          letterSpacing: '0.05%',
          lineHeight: '19.2px',
        }}
      >
        Pilih jumlah e-Meterai yang Anda butuhkan
      </h1>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* List Materai */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {eMateraiItems.map((item) => (
            <div
              key={item.count}
              className={`border rounded-lg bg-white shadow hover:shadow-lg transition ${
                selectedItem?.count === item.count ? 'bg-[#845FF1]' : ''
              }`}
              onClick={() => handlePress(item)}
            >
              <div className="flex border-[1px] rounded-[8px] border-purple-500 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                <div className="flex-1 p-4">
                  <h3
                    className="text-[16px] text-[#598AE9] font-[600] mb-2"
                    style={{
                      fontFamily: Constants.fontFamilies.primary,
                      lineHeight: '24px',
                      letterSpacing: '0.05%',
                    }}
                  >
                    {item.keping} Keping e-Materai
                  </h3>
                  <ul className="list-none mb-4">
                    <li className="flex items-center text-sm text-gray-500 mb-2">
                      <img
                        src={Check}
                        alt="Check"
                        className="mr-2"
                        style={{
                          width: '21px',
                          height: '21px',
                          padding: '6.72px 4.83px 6.86px 5.04px',
                          borderRadius: '80px',
                          background: '#A162F9',
                        }}
                      />
                      Resmi, terverifikasi, dan Legal digunakan
                    </li>
                    <li className="flex items-center text-sm text-gray-500 mb-2">
                      <img
                        src={Check}
                        alt="Check"
                        className="mr-2"
                        style={{
                          width: '21px',
                          height: '21px',
                          padding: '6.72px 4.83px 6.86px 5.04px',
                          borderRadius: '80px',
                          background: '#A162F9',
                        }}
                      />
                      Dapat digunakan pada dokumen digital
                    </li>
                  </ul>
                  <div className="w-[150px] h-[27px] rounded-[8px] border border-purple-500 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-center">
                    <p>Rp. {item.price}</p>
                  </div>
                </div>

                <div
                  className={`flex-none w-1/3 flex border-[1px] border-l-purple-500 rounded-l rounded-[8px] items-center justify-center ${
                    selectedItem?.count === item.count ? 'bg-[#845FF1]' : ''
                  }`}
                >
                  <button
                    className={`text-[Montserrat] font-[500] text-[16px] hover:underline ${
                      selectedItem?.count === item.count
                        ? 'text-white'
                        : 'text-[#845FF1]'
                    }`}
                  >
                    Beli <br /> e-Materai
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Discount and Confirmation Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="grid grid-cols-1 gap-6">
            {/* Discount Code */}
            <div>
              <label
                htmlFor="discount"
                className="block text-[16px] font-[400] text-[#112C6F] mb-4"
                style={{
                  fontFamily: Constants.fontFamilies.primary,
                  lineHeight: '19.2px',
                  letterSpacing: '0.05%',
                }}
              >
                Kode Diskon atau Referral
              </label>
              <div className="flex shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                <input
                  type="text"
                  id="discount"
                  placeholder="Masukkan kode diskon"
                  className="border rounded-l-[8px] border-purple-500 p-3 flex-1 focus:ring-2 focus:ring-purple-500"
                />
                <button
                  className="bg-purple-500 text-white font-[400] text-[14px] rounded-r px-4 py-2 hover:bg-purple-600 transition"
                  style={{
                    fontFamily: Constants.fontFamilies.primary,
                    letterSpacing: '0.05%',
                    lineHeight: '16.8px',
                  }}
                >
                  Cek Sekarang
                </button>
              </div>
            </div>

            {/* Confirmation Area */}
            <div>
              <label
                htmlFor="confirmation"
                className="block text-[Montserrat] text-[16px] font-[400] text-[#112C6F] mb-2"
              >
                Konfirmasi Pembelian e-Materai Anda
              </label>
              <div className="w-full h-auto border-[1px] text-[Montserrat] text-[#212121] text-[12px] font-[400] border-purple-500 bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-6 flex flex-col items-start justify-start text-left">
                {/* Additional Text */}
                <ul className="text-sm text-gray-700 list-decimal list-inside mb-4">
                  <li>
                    e-Meterai yang Anda pilih adalah{' '}
                    {selectedItem
                      ? `${selectedItem.keping} Keping e-Meterai Rp. 10.000`
                      : 'Belum ada e-Meterai dipilih'}
                  </li>
                  <li>
                    e-Meterai yang sudah dibeli tidak dapat dikembalikan (refund). Pastikan
                    Anda telah memilih e-Meterai sesuai kebutuhan Anda.
                  </li>
                </ul>

                {/* Subtotal Section */}
                <div className="text-gray-800 w-full sm:w-auto sm:translate-x-0">
                  <p>Sub: Total: <strong>Rp. {selectedItem ? selectedItem.price.toLocaleString() : '0'}</strong></p>
                  <p>Diskon Voucher: Rp. 0</p>
                  <p>Biaya Layanan: Rp. 0</p>
                  <p className="font-bold mt-4">
                    Total Pembelian: <strong>Rp. {selectedItem ? selectedItem.price.toLocaleString() : '0'}</strong>
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Pay Button */}
          <div className="mt-6 text-right">
            <button className="bg-purple-500 w-full text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition">
              Bayar Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyMaterai;
