import img1 from "../images/movies/1.jpg";
import img2 from "../images/movies/2.jpg";
import img3 from "../images/movies/3.jpg";
import img4 from "../images/movies/4.jpg";
import img5 from "../images/movies/5.jpg";
import img6 from "../images/movies/6.jpg";
import img7 from "../images/movies/7.jpg";
import img8 from "../images/movies/8.jpg";

import imgPict1 from "../images/actors/1.jpg";
import imgPict2 from "../images/actors/2.jpg";
import imgPict3 from "../images/actors/3.jpg";
import imgPict4 from "../images/actors/4.jpg";
import imgPict5 from "../images/actors/5.jpg";
import imgPict6 from "../images/actors/6.jpg";

const DataTopMovies = [
  { id: "12345", title: "Eugene Crona", imDbRating: "9.2", image: img1 },
  { id: "12345", title: "Jan Waters", imDbRating: "6.1", image: img2 },
  { id: "12345", title: "Dale Frami", imDbRating: "8.3", image: img3 },
  { id: "12345", title: "Phil Rosenbaona", imDbRating: "5.7", image: img4 },
  { id: "12345", title: "Miss Oscar Rona", imDbRating: "7.2", image: img5 },
  { id: "12345", title: "Wilson Rau", imDbRating: "7.5", image: img6 },
  { id: "12345", title: "Gwen Funk", imDbRating: "9.7", image: img7 },
  { id: "12345", title: "Mamie Reiche", imDbRating: "9.2", image: img8 },
];
const DataMoviesList = [
  { id: "12345", title: "Mrs. Leslie", imDbRating: "7.8", image: img5 },
  { id: "12345", title: "Sam Zulauf", imDbRating: "8.8", image: img2 },
  { id: "12345", title: "Eleanor Harr", imDbRating: "5.6", image: img3 },
  { id: "12345", title: "Johanna Schu", imDbRating: "7.4", image: img1 },
  { id: "12345", title: "Leonard Harv", imDbRating: "8.2", image: img2 },
  { id: "12345", title: "Jan Waters", imDbRating: "6.1", image: img2 },
  { id: "12345", title: "Wilson Rau", imDbRating: "7.5", image: img6 },
  { id: "12345", title: "Camille Ullr", imDbRating: "9.8", image: img2 },
  { id: "12345", title: "Phil Rosenbaona", imDbRating: "5.7", image: img4 },
  { id: "12345", title: "Betsy Legros", imDbRating: "8.8", image: img8 },
  { id: "12345", title: "Marcus Simoslie", imDbRating: "8.4", image: img6 },
  { id: "12345", title: "Alejandro Sweslie", imDbRating: "5.7", image: img1 },
  { id: "12345", title: "Shelly Purdylie", imDbRating: "6.5", image: img7 },
  { id: "12345", title: "Mamie Reiche", imDbRating: "9.2", image: img8 },
  { id: "12345", title: "Cornelius Ralie", imDbRating: "9.3", image: img1 },
  { id: "12345", title: "Dominick Jac", imDbRating: "5.7", image: img1 },
  { id: "12345", title: "Eugene Crona", imDbRating: "9.2", image: img1 },
  { id: "12345", title: "Dale Frami", imDbRating: "8.3", image: img3 },
  { id: "12345", title: "Miss Oscar Rona", imDbRating: "7.2", image: img5 },
  { id: "12345", title: "Gwen Funk", imDbRating: "9.7", image: img7 },
];
const DataDetailMovie = {
  id: "12345",
  title: "Thor: Love and Thunder",
  image: img4,
  releaseDate: "2022-07-08",
  imDbRating: "9.0",
  languages: "English",
  genres: "Action, Adventure, Fantasy",
  companies: "Marvel Studios, Walt Disney Pictures",
  plot: "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
  actorList: [
    {
      name: "Taika Waititi",
      asCharacter: "Korgas Korg",
      image: imgPict1,
    },
    {
      name: "Karen Gillan",
      asCharacter: "Nebulaas Nebula",
      image: imgPict2,
    },
    {
      name: "Natalie Portman",
      asCharacter: "Jane Fosteras Jane Foster…",
      image: imgPict3,
    },
    {
      name: "Christian Bale",
      asCharacter: "Gorr the God Butcheras Gorr the God Butcher",
      image: imgPict4,
    },
    {
      name: "Chris Hemsworth",
      asCharacter: "Thoras Thor",
      image: imgPict5,
    },
    {
      name: "Jaimie Alexander",
      asCharacter: "Sifas Sif",
      image: imgPict6,
    },
  ],
};

export { DataTopMovies, DataMoviesList, DataDetailMovie };
