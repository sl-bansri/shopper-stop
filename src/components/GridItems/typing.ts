import React from 'react'
export interface GridItemsProps extends React.HTMLAttributes<HTMLImageElement> {
      variant?: 'primary' | 'secondary' | 'ordinary' |'mainsection';
      size?: 'small' | 'medium' | 'large';
      children: React.ReactNode;
    }