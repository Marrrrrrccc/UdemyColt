var movies = [
  {
    title: "In burges",
    rating: "5 stars",
    hasWatched: true,
  },

  {
    title: "Frozen",
    rating: "4.5 stars",
    hasWatched: false,
  },

  {
    title: "Mad max ",
    rating: "5 stars",
    hasWatched: true,
  },
  {
    title: "Les Miserables",
    rating: "3.5 stars",
    hasWatched: false,
  },
];
for (var i = 0; i < movies.length; i++) {
  if (movies[i].hasWatched) {
    console.log(
      "You have watched " +
        '"' +
        movies[i].title +
        '"' +
        " - " +
        movies[i].rating
    );
  } else {
    console.log(
      "You have not seen " +
        '"' +
        movies[i].title +
        '"' +
        " - " +
        movies[i].rating
    );
  }
}
