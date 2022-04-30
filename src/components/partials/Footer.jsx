import React from "react";
import JMLogo from "../../images/JM-Logo.svg";

const Footer = () => {
  return (
    <footer className="bg-dark w-full h-auto">
      <div className="container">
        <div className="text-light pt-6 pb-8 px-4 md:pt-8 md:pb-10 md:px-0">
          <div className="w-full h-auto my-2 flex flex-wrap justify-center items-center">
            <img className="w-10 h-10 mr-2 pointer-events-none md:w-14 md:h-14 md:mr-4" src={JMLogo} alt="Jexmov Logo" />
            <span className="text-2xl font-kronaOne md:text-3xl">Jexmov</span>
          </div>
          <h4 className="text-xl text-center font-roboto font-medium my-2 md:text-2xl">Copyright © 2022 Jexmov Indonesia</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
