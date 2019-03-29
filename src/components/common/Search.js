import React from "react";

const Search = props => {
  const { onChange, value } = props;

  return (
    <input
      type="text"
      name="movieTitle"
      placeholder="Search"
      style={{ marginBottom: "20px", width: "50%" }}
      onChange={onChange}
      value={value}
    />
  );
};

export default Search;
