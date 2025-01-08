import React, { useState } from 'react';
import Constants from '../utils/Constants';
import { useNavigate } from 'react-router-dom';

const Dropdown = ({ children, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmenuClick = (link) => {
    navigate(link);
    onNavigate();
  };

  return (
    <div
      className="flex items-center justify-center px-4 md:px-8 lg:px-16"
      style={{
        width: Constants.dimensions.fullWidth,
        height: '173px',
        position: 'absolute',
        top: '59px',
        left: '320%',
        transform: 'translateX(-50%)',
        backgroundColor: Constants.colors.primary,
        zIndex: '999',
        display: 'flex',
        gap: '38px',
      }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="container mx-auto flex justify-start items-center gap-8">
        {children.map((child) => (
          <div
            key={child.id}
            onClick={() => handleSubmenuClick(child.link)}
            className='row bg-white hover:shadow-lg transition-all duration-300 cursor-pointer'
            style={{
              padding: '0 20px',
              width: Constants.dimensions.xsmall,
              height: Constants.size.xxlarge,
              borderRadius: '14px',
              display: 'flex',
              gap: '10px'
            }}    
          >
            <div className="col-4" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                backgroundColor: Constants.colors.primary,
                width: Constants.size.xlarge,
                height: Constants.size.xlarge,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img src={child.icon} alt={child.title} style={{ width: Constants.size.medium, height: Constants.size.medium }} />
              </div>
            </div>
           
            <div className="col-8 py-7" style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              marginLeft: Constants.size.xsmall-2,
              marginTop: -Constants.size.xsmall-7,
              gap: Constants.size.xsmall-2,
            }}>
              <span
                className='font-semibold mb-1'
                style={{
                  color: `${Constants.colors.ocean}CC`,
                  fontWeight: Constants.weight.bold,
                  fontFamily: Constants.fontFamilies.primary,
                  fontSize: '12px'
                }}>
                {child.title}
              </span>
              <span
                style={{
                  color: Constants.colors.primary,
                  fontWeight: Constants.weight.regular,
                  fontSize: '10px'
                }}>
                {child.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
