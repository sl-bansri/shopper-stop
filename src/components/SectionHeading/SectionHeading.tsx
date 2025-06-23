import React from 'react'
import clsx from 'clsx'
import type { SectionHeadProps } from './typing';


const SectionHeading: React.FC<SectionHeadProps> = ({ variant = 'primary', size = 'medium',className, children, ...rest }) => {
  const baseStyles = 'font-semibold  rounded';

  const variantStyles = {
    primary: 'text-[#0f0f0f] font-medium ',
    secondary: 'text-[#474747]   font-medium',
  };

  const sizeStyles = {
    small: 'text-sm',
    medium: 'text-xl',
    large: 'text-2xl',
  };

  const combinedClasses = clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  return (
    <div className={combinedClasses} {...rest}>
      {children}
    </div>
  );
};

export default SectionHeading;