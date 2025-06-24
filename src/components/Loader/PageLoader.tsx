import React from "react";
import { useLoader } from "../../Context/LoaderContext/LoaderContext";
import "./loader.css";

const PageLoader: React.FC = () => {
  const { isLoading } = useLoader();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      {/* <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"> </div> */}

      {/* <div><img src='/src/assets/loader/sample.gif' /></div> */}
      {/* <p className='text-white text-bold text-2xl ml-2'>Please wait... </p> */}

      <div className="dot-spinner">
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
      </div>
    </div>
  );
};

export default PageLoader;
