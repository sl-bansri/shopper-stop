import React from 'react'
export interface ItemHeadProps extends React.HTMLAttributes<HTMLHeadingElement> {
      variant?: 'primary' | 'secondary' |'ordinary' ;
      size?: 'small' | 'medium' | 'large';
      children: React.ReactNode;
    }
