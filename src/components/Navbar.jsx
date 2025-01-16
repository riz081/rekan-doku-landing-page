import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavbarMenu } from '../data/mock/dataNav';
import Logo from './Logo';
import Constants from '../utils/Constants';
import { MdMenu } from 'react-icons/md';
import ResponsiveMenu from './ResponsiveMenu';
import { FaChevronDown } from 'react-icons/fa';
import Button from './Button';
import Dropdown from './Dropdown';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null); // Status untuk menyimpan informasi pengguna yang login
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false); // Status untuk mengelola dropdown profil

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen && !event.target.closest('.nav-item')) {
        setDropdownOpen(null);
      }
      if (profileDropdownOpen && !event.target.closest('.profile-dropdown')) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownOpen, profileDropdownOpen]);

  useEffect(() => {
    // Simulasi mendapatkan informasi pengguna yang login
    const loggedInUser = {
      name: 'John Doe',
      email: 'john.doe@example.com',
    };
    setUser(loggedInUser);
  }, []);

  const handleMenuClick = (menu) => {
    if (menu.children) {
      setDropdownOpen(dropdownOpen === menu.id ? null : menu.id);
    } else if (menu.link === '/' && location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(menu.link);
    }
  };

  const handleDropdownClose = () => {
    setDropdownOpen(null);
  };

  const handleProfileClick = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  return (
    <>
      <nav
        className={`shadow-md bg-white z-50 transition-all duration-300 ${
          isScrolled ? 'fixed top-0 left-0 w-full border-b-2' : 'relative'
        }`}
        style={{ borderBottom: '2px solid #F8F4F0' }}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-10">
          <div className="flex items-center gap-2">
            <Logo />
            <span
              className="text-lg font-semibold"
              style={{
                color: Constants.colors.primary,
                fontFamily: Constants.fontFamilies.primary,
              }}
            >
              Rekan Doku
            </span>
          </div>

          <div className="hidden md:flex justify-start flex-1 ml-12">
            <ul
              className="flex items-center gap-8"
              style={{ color: Constants.colors.darkBlue }}
            >
              {NavbarMenu.map((menu) => (
                <li
                  key={menu.id}
                  className="relative group nav-item"
                >
                  <button
                    onClick={() => handleMenuClick(menu)}
                    className="inline-flex items-center py-1 px-3 font-semibold hover:text-blue-500 focus:outline-none"
                    style={{
                      fontFamily: Constants.fontFamilies.primary,
                    }}
                  >
                    {menu.title}
                    {menu.children && (
                      <FaChevronDown
                        className={`ml-1 text-sm text-[#112C6F] transition-transform duration-200 ${
                          dropdownOpen === menu.id ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>
                  {menu.children && dropdownOpen === menu.id && (
                    <Dropdown 
                      children={menu.children} 
                      onNavigate={handleDropdownClose}
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="items-center gap-4 hidden md:flex">
            {user ? (
              <div className="relative profile-dropdown">
                <button
                  onClick={handleProfileClick}
                  className="text-[16px] font-[700] focus:outline-none pr-6 flex items-center"
                  style={{ fontFamily: Constants.fontFamilies.primary, lineHeight: '19.2px', letterSpacing: '0.05%' }}
                >
                  Hi, {user.name || user.email}
                  <FaChevronDown
                    className={`ml-1 text-sm text-[#112C6F] transition-transform duration-200 ${
                      profileDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                    <ul className="py-1">
                      <li>
                        <button
                          onClick={() => navigate('/profile')}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                        >
                          Profile
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => navigate('/logout')}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Button
                  text="Masuk"
                  variant="default"
                  size="medium"
                  style={{ borderColor: Constants.colors.darkBlue }}
                  onClick={() => navigate('/auth-login')}
                  isHidden={false}
                />

                <Button
                  text="Coba Gratis Sekarang"
                  variant="primary"
                  size="medium"
                  style={{ borderColor: Constants.colors.darkBlue }}
                  onClick={() => alert('Coba Gratis Sekarang clicked')}
                  isHidden={false}
                />
              </>
            )}
          </div>

          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>

      <ResponsiveMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;