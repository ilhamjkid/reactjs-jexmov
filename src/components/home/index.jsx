import React, { useEffect } from "react";
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";
import Header from "./Header";
import TopMovies from "./TopMovies";
import BgHeader from "../../images/header.jpg";

const Home = () => {
  useEffect(() => {
    document.title = "Jexmov Home";
  }, []);
  return (
    <main className="w-full h-auto">
      <section className="w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${BgHeader})` }}>
        <Navbar />
        <Header />
      </section>
      <TopMovies />
      <Footer />
    </main>
  );
};

export default Home;
