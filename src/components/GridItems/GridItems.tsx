import React from 'react'
import clsx from 'clsx'
import type { GridItemsProps } from './typing';

const GridItems: React.FC<GridItemsProps> = ({ variant = 'primary',className, children, ...rest }) => {
 

  const variantStyles = {
    primary: "mx-auto grid grid-cols-1 w-fit md:grid-cols-3 lg:grid-cols-3 gap-6  sm:mx-0 ",
    secondary: 'text-gray-mx-auto grid grid-cols-1 w-fit md:grid-cols-2 lg:grid-cols-3 gap-6  sm:mx-0 ',
    ordinary: 'mx-auto grid grid-cols-1 w-fit md:grid-cols-2 lg:grid-cols-2 gap-4  '

  };


  const combinedClasses = clsx(
    variantStyles[variant],
    className,
  );

  return (
    <div className={combinedClasses} {...rest}>
      {children}
    </div>
  );
};

export default GridItems;