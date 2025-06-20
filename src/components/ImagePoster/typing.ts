import React from 'react'
export interface ImagePosterProps extends React.ImgHTMLAttributes<HTMLImageElement> {
      src:string |undefined,
      alt:string,
      variant?: 'primary' | 'secondary'  ;
      // children: React.ReactNode;
    }