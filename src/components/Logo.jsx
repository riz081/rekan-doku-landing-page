import React from 'react';
import Constants from '../utils/Constants'; // Pastikan path file Constants benar

const Logo = () => {
  return (
    <svg
      width="55"
      height="55"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Huruf "D" */}
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={Constants.colors.cyan} />
          <stop offset="100%" stopColor={Constants.colors.ocean} />
        </linearGradient>
      </defs>
      <path
        d="M10 5H20C30 5 35 15 35 25C35 35 30 45 20 45H10V5Z"
        fill="url(#gradient)"
      />
      {/* Oval kecil */}
      <circle
        cx="43"
        cy="39"
        r="6"
        fill={Constants.colors.cyan}
      />
    </svg>
  );
};

export default Logo;
