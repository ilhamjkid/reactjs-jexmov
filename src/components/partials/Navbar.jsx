import React from "react";
import { Link } from "react-router-dom";
import JMLogo from "../../images/JM-Logo.svg";

const Navbar = () => {
  const scrollTo = (id) => {
    const section = document.querySelector(id);
    return section.scrollIntoView();
  };
  return (
    <nav className="container">
      <div className="text-light w-full h-auto py-2 flex flex-wrap justify-between items-center md:py-6">
        <div className="w-full h-auto py-1 flex justify-center items-center md:w-auto md:p-0">
          <a href="/" className="flex items-center hover:animate-shrink">
            <img className="w-10 h-10 mr-2 pointer-events-none" src={JMLogo} alt="Jexmov Logo" />
            <span className="text-2xl font-kronaOne">Jexmov</span>
          </a>
        </div>
        <div className="text-2xl font-roboto font-semibold w-full h-auto py-1 flex justify-center items-center md:w-auto md:p-0">
          <span className="mx-2 hover:animate-shrink cursor-pointer md:m-0" onClick={scrollTo.bind(this, "#topMovies")}>
            Top Movies
          </span>
          <Link className="mx-2 hover:animate-shrink md:m-0 md:ml-4" to="/movies">
            List Movies
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
