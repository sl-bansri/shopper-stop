import React from 'react'
import type {  ButtonProps } from './typing'
import clsx from 'clsx'


const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'medium',className, children, ...rest }) => {
  const baseStyles = 'font-semibold p-2 rounded';

  const variantStyles = {
    primary: 'bg-[#e2e0e0a2] hover:bg-gray-400 inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none shadow font-medium  disabled:opacity-100 relative h-9 min-w-[46px] cursor-pointer gap-2 overflow-hidden rounded-[2px] bg-whiteShade px-4 py-3 text-center text-sm !leading-[14px] text-black ',
    secondary: 'bg-[#000000] cursor-pointer p-2 rounded-md text-[#ffffff] w-full sm:w-1/2',
    outline: 'border-2 cursor-pointer border-black rounded-md w-full sm:w-1/2',
    cross:'text-red-600 font-bold ml-auto ',
  };

  const sizeStyles = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-2xl',
  };

  const combinedClasses = clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  return (
    <button className={combinedClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;