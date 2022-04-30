import { createContext, useContext, useEffect, useState } from "react";
import { DataTopMovies, DataMoviesList } from "../data/MoviesLocal";

const MoviesContext = createContext({
  empty: true,
});

const useMoviesContext = () => {
  return useContext(MoviesContext);
};

const MoviesProvider = ({ children }) => {
  const [topMoviesData, setTopMoviesData] = useState([]);
  const [movieListData, setMovieListData] = useState([]);
  useEffect(() => {
    addTopMovies();
    addMovieList();
  }, []);
  const addTopMovies = () => {
    setTopMoviesData(DataTopMovies);
  };
  const addMovieList = () => {
    setMovieListData(DataMoviesList);
  };
  const MoviesContextValue = { topMoviesData, movieListData };
  return <MoviesContext.Provider value={MoviesContextValue}>{children}</MoviesContext.Provider>;
};

export { useMoviesContext, MoviesProvider };
