import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { useMoviesContext } from "../../context/MoviesContext";
import imgRate from "../../images/Star.svg";
import Footer from "../partials/Footer";

const reducer = (state, payload) => {
  if (payload.action === "min") {
    if (state === 4) return state;
    else return state - 4;
  } else if (payload.action === "plus") {
    if (state < payload.total) {
      return state + 4;
    } else return state;
  } else return state;
};

const Movies = () => {
  const { movieListData } = useMoviesContext();
  const [state, dispatch] = useReducer(reducer, 4);
  const [movieList, setMovieList] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [total, setTotal] = useState(0);
  useEffect(() => {
    document.title = "Jexmov Movies";
    getMovies(keyword);
  }, [keyword, movieListData]);
  const getMovies = (keyword) => {
    if (movieListData) {
      const newMvs = movieListData.filter((m) => {
        const reg = new RegExp(keyword, "ig");
        return m.title.search(reg) >= 0;
      });
      setMovieList(newMvs);
      setTotal(newMvs.length);
    }
  };
  const sliceTitle = (title) => {
    if (title.length > 12) {
      const newTitle = title.slice(0, 12);
      return newTitle + "..";
    } else return title;
  };
  const createMovie = (mvList) => {
    const movies = [];
    mvList.forEach((m, i) => {
      if (i < state) {
        movies.push(
          <div key={i} className="movie-child-mv">
            <img className="image-mv" src={m.image} alt={m.title} />
            <h1 className="title-mv">{sliceTitle(m.title)}</h1>
            <div className="rateyear-mv">
              <span>({m.year ?? "2022"})</span>
              <img src={imgRate} alt="Rate" />
              <span>{m.imDbRating}</span>
            </div>
            <Link className="button-mv" to={`/detail/m/${m.id}`}>
              Detail Movie
            </Link>
          </div>
        );
      }
    });
    return movies;
  };
  return (
    <main className="w-full min-h-screen">
      <section className="bg-light w-full h-auto min-h-screen">
        <div className="container">
          <div className="head-cont-mv">
            <h2 className="head-title-mv">Movie List</h2>
            <input className="head-search-mv" type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Search Movie" />
          </div>
          {movieList.length > 0 ? (
            <div className="movie-cont-mv">{createMovie(movieList)}</div>
          ) : (
            <div className="w-full h-[60vh] flex justify-center items-center">
              <h1 className="text-dark text-4xl font-semibold">Movie Not Found</h1>
            </div>
          )}
          <div className="btn-group-cont-mv">
            <Link className="btn-group-mv rounded-l-lg border" to="/">
              Back
            </Link>
            <button className="btn-group-mv border-y" type="button" onClick={() => dispatch({ action: "min", total })}>
              Less
            </button>
            <button className="btn-group-mv rounded-r-lg border" type="button" onClick={() => dispatch({ action: "plus", total })}>
              More
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Movies;
