import React from "react";
import clsx from "clsx";
import type { ImagePosterProps } from "./typing";

const ImagePoster: React.FC<ImagePosterProps> = ({
  src,
  alt,
  variant = "primary",
  className,
  ...rest
}) => {
  const variantStyles = {
    primary: "bg-cover   h-[250px] w-full sm:h-[400px]",
    secondary: "bg-cover  h-[250px] w-full sm:h-[300px]",
  };

  const combinedClasses = clsx(variantStyles[variant], className);

  return <img src={src} alt={alt} className={combinedClasses} {...rest}></img>;
};

export default ImagePoster;
