import { createContext, useContext, useEffect, useState } from "react";
import { DataTopMovies, DataMoviesList } from "../data/MoviesLocal";
import { URLTop, URLList } from "../api/urlMovies";

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
  const addTopMovies = async () => {
    try {
      const response = await fetch(URLTop).then((res) => res.json());
      const result = await response.items;
      const newMvs = [...result, ...DataTopMovies];
      setTopMoviesData(newMvs);
    } catch (err) {
      console.log(err.message);
    }
  };
  const addMovieList = async () => {
    try {
      const response = await fetch(URLList).then((res) => res.json());
      const result = await response.items;
      const newMvs = [...result, ...DataMoviesList];
      setMovieListData(newMvs);
    } catch (err) {
      console.log(err.message);
    }
  };
  const MoviesContextValue = { topMoviesData, movieListData };
  return <MoviesContext.Provider value={MoviesContextValue}>{children}</MoviesContext.Provider>;
};

export { useMoviesContext, MoviesProvider };
