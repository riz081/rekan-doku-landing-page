import React from 'react';

const Button = ({
  text,
  onClick,
  variant = 'default', // Determines the button style
  size = 'medium', // Determines the button size
  isHidden = false, // Determines whether the button is hidden on small screens
  ...props
}) => {
  const baseStyles = `
    px-6 py-2 rounded-md font-semibold duration-200
    ${isHidden ? 'hidden md:block' : ''}
  `;

  const variantStyles = {
    default: `
      border text-primary
      hover:bg-blue-900 hover:text-white
      ${props.style?.borderColor ? `border-color: ${props.style.borderColor}` : ''}
    `,
    primary: `
      bg-blue-900 text-white
      hover:bg-white hover:text-blue-900 border
    `,
  };

  const sizeStyles = {
    small: 'text-sm py-1 px-4',
    medium: 'text-lg py-2 px-6',
    large: 'text-xl py-3 px-8',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
