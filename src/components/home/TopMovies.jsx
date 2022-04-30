import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMoviesContext } from "../../context/MoviesContext";
import imgRate from "../../images/Star.svg";

const TopMovies = () => {
  const { topMoviesData } = useMoviesContext();
  const [topMovies, setTopMovies] = useState([]);
  useEffect(() => {
    setMovies();
  }, [topMoviesData]);
  const setMovies = () => {
    setTopMovies(topMoviesData);
  };
  const sliceTitle = (title) => {
    if (title.length > 12) {
      const newTitle = title.slice(0, 12);
      return newTitle + "..";
    } else return title;
  };
  return (
    <section id="topMovies" className="bg-light w-full h-auto">
      <div className="container">
        <div className="head-cont-mv">
          <h2 className="head-title-mv">Top Movies</h2>
        </div>
        <div className="movie-cont-mv">
          {topMovies.map((top, index) => {
            return (
              <div key={index} className="movie-child-mv">
                <img className="image-mv" src={top.image} alt={top.title} />
                <h1 className="title-mv">{sliceTitle(top.title)}</h1>
                <div className="rateyear-mv">
                  <span>({top.year ?? "2022"})</span>
                  <img src={imgRate} alt="Rate" />
                  <span>{top.imDbRating}</span>
                </div>
                <Link className="button-mv" to={`/detail/h/${top.id}`}>
                  Detail Movie
                </Link>
              </div>
            );
          })}
        </div>
        <div className="p-1 md:p-4 lg:p-6"></div>
      </div>
    </section>
  );
};

export default TopMovies;
