import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container">
      <div className="text-light w-full min-h-[65vh] p-4 flex flex-wrap justify-center content-center items-center md:min-h-[75vh] md:p-0">
        <div className="w-full h-auto my-2 lg:w-3/4">
          <h1 className="text-3xl text-center font-bold md:text-6xl lg:text-7xl">Find your favorite movie and watch it now</h1>
        </div>
        <div className="w-full h-auto flex justify-center my-2">
          <Link className="text-xl text-center font-medium bg-primary py-2 px-4 rounded-lg hover:animate-shrink md:text-3xl md:py-3 md:px-6 lg:text-2xl" to="/movies">
            Find Movies
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
