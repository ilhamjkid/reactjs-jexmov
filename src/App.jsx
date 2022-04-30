import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Movies from "./components/movies";
import NotFound from "./components/error/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
