import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Movies from "./components/movies";
import Detail from "./components/movies/Detail";
import NotFound from "./components/error/NotFound";
import { MoviesProvider } from "./context/MoviesContext";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MoviesProvider children={<Home />} />} />
      <Route path="movies" element={<MoviesProvider children={<Movies />} />} />
      <Route path="detail/:p/:id" element={<MoviesProvider children={<Detail />} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
