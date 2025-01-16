import React from 'react';
import Constants from '../utils/Constants';
import { QuotaMaterai } from '../assets';

// Fungsi untuk generate kuota secara dinamis
const generateQuota = () => {
  // return Math.floor(Math.random() * 10) + 1; // Kuota antara 1 dan 10
  return 5
};

const Quota = ({ quota }) => {
  return (
    <div>
      <div className="flex bg-[#ffffff] items-center justify-between p-4 rounded-[14px] border-[1px] border-[#5B59E8] w-[314px] h-auto shadow mb-6">
        <div className="flex items-center gap-4">
          <div className="w-[76px] h-[73px] bg-purple-100 flex items-center justify-center">
            <img src={QuotaMaterai} alt="Materai" />
          </div>
          <div>
            <p
              className="text-[16px] text-[#598AE9] font-[600]"
              style={{
                fontFamily: Constants.fontFamilies.primary,
                lineHeight: '24px',
                letterSpacing: '0.05%',
              }}
            >
              Kuota e-Materai Anda
            </p>
            <p
              className="text-[36px] font-[600] text-[#598AE9]"
              style={{
                fontFamily: Constants.fontFamilies.primary,
                lineHeight: '54px',
                letterSpacing: '0.05%',
              }}
            >
              {quota}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { generateQuota };
export default Quota;
