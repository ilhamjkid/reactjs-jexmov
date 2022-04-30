import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DataDetailMovie } from "../../data/MoviesLocal";
import imgRate from "../../images/Star.svg";
import Footer from "../partials/Footer";

const DetailMovie = () => {
  const navigate = useNavigate();
  const { p, id } = useParams();
  const [path, setPath] = useState("");
  const [detailMovie, setDetailMovie] = useState(null);
  useEffect(() => {
    document.title = "Jexmov Detail";
    getPath();
    getDetail();
  }, []);
  const getDetail = () => {
    if (id === "12345") return setDetailMovie(DataDetailMovie);
    else return navigate("/", { replace: true });
  };
  const getPath = () => {
    switch (p) {
      case "h":
        setPath("/");
        break;
      case "m":
        setPath("/movies");
        break;
      default:
        return navigate("/", { replace: true });
    }
  };
  return (
    <main className="w-full min-h-screen">
      <section className="bg-light w-full h-auto">
        <div className="container">
          <div className="head-cont-mv">
            <h2 className="head-title-mv">Detail Movie</h2>
          </div>
          {detailMovie && (
            <div className="w-full h-auto p-4 flex flex-wrap justify-between items-start md:p-0 md:pb-8 lg:px-36">
              <div className="w-full h-auto mx-auto md:w-1/2 lg:w-[30%] lg:mx-0">
                <img className="w-full h-auto rounded-lg" src={detailMovie.image} alt={detailMovie.title} />
              </div>
              <div className="w-full h-auto py-2 lg:w-[65%] lg:py-0">
                <h2 className="text-detail-mv">
                  Title : <span className="font-bold">{detailMovie.title}</span>
                </h2>
                <h2 className="text-detail-mv">
                  Release Date : <span className="font-normal">{detailMovie.releaseDate}</span>
                </h2>
                <h2 className="text-detail-mv flex items-center">
                  Rating : <img className="w-6 h-auto mx-2" src={imgRate} alt="Rate" />
                  <span className="font-normal">({detailMovie.imDbRating})</span>
                </h2>
                <h2 className="text-detail-mv">
                  Languages : <span className="font-normal">{detailMovie.languages}</span>
                </h2>
                <h2 className="text-detail-mv">
                  Genres : <span className="font-normal">{detailMovie.genres}</span>
                </h2>
                <h2 className="text-detail-mv">
                  Companies : <span className="font-normal">{detailMovie.companies}</span>
                </h2>
              </div>
              <div className="w-full h-auto lg:py-4">
                <h2 className="text-dark text-3xl text-center font-semibold mb-2">Plot</h2>
                <p className="text-dark text-2xl font-normal">{detailMovie.plot}</p>
              </div>
              <div className="w-full h-auto flex flex-wrap justify-evenly lg:py-4">
                <div className="w-full h-auto mt-3 md:mt-4">
                  <h2 className="text-dark text-3xl text-center font-semibold mb-2">Actors List</h2>
                </div>
                {detailMovie.actorList.map((a, i) => {
                  if (i < 6) {
                    return (
                      <div key={i} className="w-1/2 h-auto md:w-[33%] lg:w-[16%] p-2">
                        <img className="w-full h-auto rounded-lg" src={a.image} alt={a.name} />
                        <h2 className="text-dark text-lg text-center font-semibold">{a.name}</h2>
                        <h3 className="text-dark text-lg text-center font-normal">({a.asCharacter})</h3>
                      </div>
                    );
                  }
                })}
              </div>
              <div className="w-full h-auto py-4 flex justify-center items-center">
                <Link className="text-light text-xl text-center font-semibold bg-primary py-2 px-6 rounded-lg hover:animate-shrink" to={path}>
                  Go Back
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default DetailMovie;
