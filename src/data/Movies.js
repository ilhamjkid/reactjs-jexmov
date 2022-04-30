const DataTopMovies = [
  { title: "Thor-Thoran 1" },
  { title: "Thor-Thoran 2" },
  { title: "Thor-Thoran 3" },
  { title: "Thor-Thoran 4" },
  { title: "Thor-Thoran 5" },
  { title: "Thor-Thoran 6" },
  { title: "Thor-Thoran 7" },
  { title: "Thor-Thoran 8" },
];

const DataListMovies = [];
const addMovies = (total) => {
  for (let i = 1; i < total; i++) {
    DataListMovies.push({ title: "Thorharos " + i });
  }
};
addMovies(250);

const DataDetailMovie = {
  title: "Thor: Love and Thunder",
  releaseDate: "2022-07-08",
  rate: "9.0",
  languages: "English",
  genres: "Action, Adventure, Fantasy",
  companies: "Marvel Studios, Walt Disney Pictures",
  plot: "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
  actorsList: [
    {
      name: "Taika Waititi",
      as: "Korgas Korg",
      image: "1",
    },
    {
      name: "Karen Gillan",
      as: "Nebulaas Nebula",
      image: "2",
    },
    {
      name: "Natalie Portman",
      as: "Jane Fosteras Jane Foster…",
      image: "3",
    },
    {
      name: "Christian Bale",
      as: "Gorr the God Butcheras Gorr the God Butcher",
      image: "4",
    },
    {
      name: "Chris Hemsworth",
      as: "Thoras Thor",
      image: "5",
    },
    {
      name: "Jaimie Alexander",
      as: "Sifas Sif",
      image: "6",
    },
  ],
};

export { DataTopMovies, DataListMovies, DataDetailMovie };
