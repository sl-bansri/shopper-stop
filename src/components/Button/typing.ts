import React from 'react'
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
      variant?: 'primary' | 'secondary' | 'outline'| 'cross';
      size?: 'small' | 'medium' | 'large';
      children: React.ReactNode;
    }

// export type ButtonComponentProps = {
//     button : ButtonProps
// }