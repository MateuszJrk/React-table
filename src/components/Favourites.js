import React from "react";

const Favourites = props => {
  return props.data.favouriteMovies.map(m => {
    return (
      <ul key={m}>
        <li>{m}</li>
      </ul>
    );
  });
};

export default Favourites;
