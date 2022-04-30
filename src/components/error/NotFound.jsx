import React, { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "Jexmov Error 404";
  }, []);
  return (
    <div className="text-light font-semibold bg-dark w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-8xl">404</h1>
      <h4 className="text-4xl">Page Not Found</h4>
    </div>
  );
};

export default NotFound;
