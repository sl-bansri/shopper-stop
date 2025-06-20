import React from 'react'
export interface SectionHeadProps extends React.HTMLAttributes<HTMLHeadingElement> {
      variant?: 'primary' | 'secondary' ;
      size?: 'small' | 'medium' | 'large';
      children: React.ReactNode;
    }
