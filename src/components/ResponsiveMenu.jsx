import React, { useState } from 'react';
import { NavbarMenu } from '../data/mock/dataNav';
import Constants from '../utils/Constants';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa'; // Importing icons
import Button from './Button'; // Assuming the Button component is already created

const ResponsiveMenu = ({ open, onClose }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-white z-50 transition-transform duration-300 ${
        open ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center px-4 py-4 border-b border-gray-300">
        <h2 className="text-lg font-semibold" style={{ color: Constants.colors.darkBlue }}>
          Menu
        </h2>
        <button onClick={onClose} className="text-2xl font-bold">
          ×
        </button>
      </div>

      {/* Menu Items */}
      <ul className="flex flex-col items-start gap-4 p-4">
        {NavbarMenu.map((menu) => (
          <li key={menu.id} className="w-full">
            <div>
              <a
                href={menu.link}
                className="py-2 px-4 text-lg font-semibold hover:bg-gray-100 rounded flex items-center"
                style={{
                  color: Constants.colors.darkBlue,
                  fontFamily: Constants.fontFamilies.primary,
                }}
                onClick={(e) => {
                  if (menu.children) {
                    e.preventDefault();
                    toggleDropdown(menu.id);
                  } else {
                    onClose();
                  }
                }}
              >
                {menu.title}
                {menu.children && (
                  <span className="ml-2 text-sm">
                    {activeDropdown === menu.id ? (
                      <FaChevronDown className="inline" />
                    ) : (
                      <FaChevronRight className="inline" />
                    )}
                  </span>
                )}
              </a>
              {menu.children && activeDropdown === menu.id && (
                <ul className="pl-4">
                  {menu.children.map((child) => (
                    <li key={child.id}>
                      <a
                        href={child.link}
                        className="block py-2 px-4 text-lg font-semibold hover:bg-gray-100 rounded"
                        style={{
                          color: Constants.colors.darkBlue,
                          fontFamily: Constants.fontFamilies.primary,
                        }}
                        onClick={onClose}
                      >
                        {child.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
        
      </ul>

      {/* Button Section */}
      <div className="flex items-center gap-4 p-4">
        <Button
            text="Masuk"
            variant="default"
            size="medium"
            style={{ borderColor: Constants.colors.darkBlue }}
            onClick={() => alert('Masuk clicked')}
        />

        <Button
            text="Coba Gratis Sekarang"
            variant="primary"
            size="medium"
            style={{ borderColor: Constants.colors.darkBlue }}
            onClick={() => alert('Coba Gratis Sekarang clicked')}
        />
      </div>
      
    </div>
  );
};

export default ResponsiveMenu;
