import React from 'react'
export interface InputFieldProps extends React.HTMLAttributes<HTMLImageElement> {
      variant?: 'primary' | 'secondary' |'ordinary' ;
      size?: 'small' | 'medium' | 'large';
      children: React.ReactNode;
    }