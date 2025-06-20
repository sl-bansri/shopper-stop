import React from 'react'
import clsx from 'clsx'
import type { ItemHeadProps } from './typing';



const ItemHeading: React.FC<ItemHeadProps> = ({ variant = 'primary', size = 'medium',className, children, ...rest }) => {
 

  const variantStyles = {
    primary: "font-semibold ",
    secondary: 'text-gray-600',
    ordinary:"font-medium",
  };

  const sizeStyles = {
    small: 'text-sm',
    medium: 'text-lg',
    large: 'text-2xl',
  };

  const combinedClasses = clsx(
    
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  return (
    <p className={combinedClasses} {...rest}>
      {children}
    </p>
  );
};

export default ItemHeading;