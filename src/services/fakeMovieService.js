import React from "react";
import * as genresAPI from "./fakeGenreService";
import uuid from "uuid";

const movies = [
  {
    _id: uuid(),
    title: "Terminator",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: `20${Math.floor(Math.random() * 100)}-01-04`,
    poster: (
      <img
        style={{ width: "10%" }}
        alt="default"
        src="https://images-na.ssl-images-amazon.com/images/I/A1wiVBc2VLL._SY550_.jpg"
      />
    ),
    liked: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus aspernatur maxime. Sapiente quae, dolor ratione, eveniet enim dicta exercitationem nam nostrum natus similique illum? Animi quod eaque ab hic."
  },
  {
    _id: uuid(),
    title: "Die Hard",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    publishDate: `20${Math.floor(Math.random() * 100)}-01-04`,
    poster: (
      <img
        style={{ width: "10%" }}
        alt="default"
        src="https://m.media-amazon.com/images/I/919Tr2v5bML._AC_UL436_.jpg"
      />
    ),
    liked: false,
    description:
      "Lorem ipsum  sit amet consectetur adipisicing elit. Explicabo voluptatibus aspernatur maxime. Sapiente quae, dolor ratione, eveniet enim dicta exercitationem nam nostrum natus similique illum? Animi quod eaque ab hic."
  },
  {
    _id: uuid(),
    title: "Get Out",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 8,
    dailyRentalRate: 3.5,
    publishDate: `20${Math.floor(Math.random() * 100)}-01-04`,
    poster: (
      <img
        style={{ width: "10%" }}
        alt="default"
        src="https://m.media-amazon.com/images/I/A1JALctBEKL._AC_UL436_.jpg"
      />
    ),
    liked: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus aspernatur maxime. Sapiente quae, dolor ratione, eveniet enim dicta exercitationem nam nostrum natus similique illum? Animi quod eaque ab hic."
  },
  {
    _id: uuid(),
    title: "Trip to Italy",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    publishDate: `20${Math.floor(Math.random() * 100)}-01-04`,
    poster: (
      <img
        style={{ width: "10%" }}
        alt="default"
        src="https://m.media-amazon.com/images/I/91oOrAl368L._AC_UL436_.jpg"
      />
    ),
    liked: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus aspernatur maxime. Sapiente quae, dolor ratione, eveniet enim dicta exercitationem nam nostrum natus similique illum? Animi quod eaque ab hic."
  },
  {
    _id: uuid(),
    title: "Airplane",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    publishDate: `20${Math.floor(Math.random() * 100)}-01-04`,
    poster: (
      <img
        style={{ width: "10%" }}
        alt="default"
        src="https://m.media-amazon.com/images/I/71NQMCMItUL._AC_UL436_.jpg"
      />
    ),
    liked: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus aspernatur maxime. Sapiente quae, dolor ratione, eveniet enim dicta exercitationem nam nostrum natus similique illum? Animi quod eaque ab hic."
  },
  {
    _id: uuid(),
    title: "Wedding Crashers",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    publishDate: `20${Math.floor(Math.random() * 100)}-01-04`,
    poster: (
      <img
        style={{ width: "10%" }}
        alt="default"
        src="https://m.media-amazon.com/images/I/81uFUJUhJaL._AC_UL436_.jpg"
      />
    ),
    liked: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus aspernatur maxime. Sapiente quae, dolor ratione, eveniet enim dicta exercitationem nam nostrum natus similique illum? Animi quod eaque ab hic."
  },
  {
    _id: uuid(),
    title: "Gone Girl",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 7,
    dailyRentalRate: 4.5,
    publishDate: `20${Math.floor(Math.random() * 100)}-01-04`,
    poster: (
      <img
        style={{ width: "10%" }}
        alt="default"
        src="https://m.media-amazon.com/images/I/91k5zTeb1mL._AC_UL436_.jpg"
      />
    ),
    liked: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus aspernatur maxime. Sapiente quae, dolor ratione, eveniet enim dicta exercitationem nam nostrum natus similique illum? Animi quod eaque ab hic."
  },
  {
    _id: uuid(),
    title: "The Sixth Sense",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: 3.5,
    publishDate: `20${Math.floor(Math.random() * 100)}-01-04`,
    poster: (
      <img
        style={{ width: "10%" }}
        alt="default"
        src="https://m.media-amazon.com/images/I/711uZBBjIeL._AC_UL436_.jpg"
      />
    ),
    liked: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus aspernatur maxime. Sapiente quae, dolor ratione, eveniet enim dicta exercitationem nam nostrum natus similique illum? Animi quod eaque ab hic."
  },
  {
    _id: uuid(),
    title: "The Avengers",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    publishDate: `20${Math.floor(Math.random() * 100)}-01-04`,
    poster: (
      <img
        style={{ width: "10%" }}
        alt="default"
        src="https://m.media-amazon.com/images/I/A1TbOVRiBRL._AC_UL436_.jpg"
      />
    ),
    liked: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus aspernatur maxime. Sapiente quae, dolor ratione, eveniet enim dicta exercitationem nam nostrum natus similique illum? Animi quod eaque ab hic."
  },
  {
    _id: uuid(),
    title: "test 1",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    publishDate: `20${Math.floor(Math.random() * 100)}-01-04`,
    poster: (
      <img
        style={{ width: "10%" }}
        alt="default"
        src="https://m.media-amazon.com/images/I/81ieAhLwR-L._AC_UL436_.jpg"
      />
    ),
    liked: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus aspernatur maxime. Sapiente quae, dolor ratione, eveniet enim dicta exercitationem nam nostrum natus similique illum? Animi quod eaque ab hic."
  }
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now().toString();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
