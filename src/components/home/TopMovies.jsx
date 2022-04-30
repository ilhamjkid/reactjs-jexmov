import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataTopMovies } from "../../data/Movies";
import imgRate from "../../images/Star.svg";
import img1 from "../../images/top-movies/1.jpg";
import img2 from "../../images/top-movies/2.jpg";
import img3 from "../../images/top-movies/3.jpg";
import img4 from "../../images/top-movies/4.jpg";

const TopMovies = () => {
  const [topMovies, setTopMovies] = useState([]);
  useEffect(() => {
    setTopMovies(DataTopMovies);
  }, []);
  const chooseImg = (numb) => {
    switch (numb) {
      case 1:
        return img1;
      case 2:
        return img2;
      case 3:
        return img3;
      default:
        return img4;
    }
  };
  return (
    <section id="topMovies" className="bg-light w-full h-auto">
      <div className="container">
        <div className="w-full h-auto pt-4 pb-2 md:pt-8 lg:pt-6">
          <h2 className="text-dark text-4xl text-center font-roboto font-bold md:text-5xl">Top Movies</h2>
        </div>
        <div className="w-full h-auto p-4 pt-2 grid grid-cols-2 grid-rows-4 gap-2 md:p-0 md:pt-4 md:pb-10 md:gap-6 lg:grid-cols-4 lg:grid-rows-2">
          {topMovies.map((top, index) => {
            return (
              <div key={index} className="text-light font-roboto bg-dark w-full h-auto col-auto p-4 md:p-6 lg:p-4">
                <img className="w-full h-auto mb-2 rounded-lg" src={chooseImg(Math.ceil(Math.random() * 4))} alt="Thor" />
                <h1 className="text-2xl font-bold md:text-3xl md:my-1">{top.title}</h1>
                <div className="text-xl font-bold flex items-center md:text-2xl md:my-1">
                  <span>(2022)</span>
                  <img className="w-5 h-auto mx-2" src={imgRate} alt="Rate" />
                  <span>9.0</span>
                </div>
                <Link className="text-lg text-center font-medium bg-primary w-full h-auto py-1.5 mt-2 rounded-lg block hover:animate-shrink md:text-2xl" to={`/detail/h/12345`}>
                  Detail Movie
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopMovies;
