import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginBanner, Logo } from '../../../assets';
import Constants from '../../../utils/Constants';

const Login = () => {
  const navigate = useNavigate();

  const [isFocused, setIsFocused] = useState({
    phoneOrEmail: false,
    password: false,
  });

  const handleFocus = (field) => {
    setIsFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field, value) => {
    setIsFocused((prev) => ({ ...prev, [field]: !!value }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[909px] h-[539px] bg-white rounded-[8px] shadow-lg p-8 flex">
        {/* Left Column */}
        <div
          className="w-[301px] h-[428px] rounded-[12px] border-[3px]"
          style={{
            top: '41px',
            left: '54px',
            gap: '0px',
          }}
        >
          {/* Add your image here */}
          <img 
            src={LoginBanner}
            alt="Login Banner"
            className="w-full h-full object-cover rounded-[12px]"
          />
        </div>

        {/* Right Column */}
        <div className="flex-1 p-8 flex flex-col justify-between translate-y-[-2em]">
          {/* Top Row */}
          <div className="flex justify-start">
            <img src={Logo} alt="Logo" className="h-12 mb-5" />
          </div>

          {/* Middle Row */}
          <div className="flex flex-col gap-6">
            {/* Phone/Email Input */}
            <div className="relative w-full">
              <input
                type="text"
                id="phoneOrEmail"
                className={`peer border border-gray-300 rounded-md p-4 pt-6 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition`}
                onFocus={() => handleFocus("phoneOrEmail")}
                onBlur={(e) => handleBlur("phoneOrEmail", e.target.value)}
              />
              <label
                htmlFor="phoneOrEmail"
                className={`font-[400] text-[12px] absolute left-4 transition-all bg-white px-1 ${
                  isFocused.phoneOrEmail
                    ? "-top-2 text-sm text-purple-500"
                    : "top-4 text-gray-400"
                }`}
                style={{
                  fontFamily: Constants.fontFamilies.primary,
                }}
              >
                Nomor Telepon/Email
              </label>
            </div>

            {/* Password Input */}
            <div className="relative w-full">
              <input
                type="password"
                id="password"
                className={`peer border border-gray-300 rounded-md p-4 pt-6 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition`}
                onFocus={() => handleFocus("password")}
                onBlur={(e) => handleBlur("password", e.target.value)}
              />
              <label
                htmlFor="password"
                className={`font-[400] text-[12px] absolute left-4 transition-all bg-white px-1 ${
                  isFocused.password
                    ? "-top-2 text-sm text-purple-500"
                    : "top-4 text-gray-400"
                }`}
                style={{
                  fontFamily: Constants.fontFamilies.primary,
                }}
              >
                Kata Sandi
              </label>
            </div>

            {/* Forgot Password Link */}
            <a href="#" className="text-purple-500 text-right mb-4">
              Lupa Kata Sandi?
            </a>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="font-[600] text-[14px] bg-[#6B5CEA] text-white rounded-md p-4 w-full hover:bg-purple-600 transition"
              style={{
                fontFamily: Constants.fontFamilies.primary,
                lineHeight: '16.8px',
                letterSpacing: '0.05%',
              }}
              onClick={() => navigate('/admin/beli-materai')}
            >
              Masuk
            </button>
            <button
              type="button"
              className="flex items-center justify-center bg-white text-[#6B5CEA] font-[600] text-[14px] border border-[#6B5CEA] rounded-md p-4 w-full hover:bg-gray-100 transition gap-3"
              style={{
                fontFamily: Constants.fontFamilies.primary,
                lineHeight: '16.8px',
                letterSpacing: '0.05%',
              }}
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg" // Ganti dengan URL atau path ikon Google Anda
                alt="Google Icon"
                className="w-5 h-5 mr-2"
              />
              Masuk dengan Google
            </button>

            <p className="text-center">
              Belum punya akun? <a href="#" className="text-purple-500">Daftar disini</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;