import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/Table";
import Like from "./common/Like";
import Test from "./Test";

class TableMovies extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: movie => (
        <>
          <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
          <Test
            movie={movie.description}
            onClick={() => this.props.onClick(movie)}
          />
        </>
      )
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      path: "poster",
      label: "Poster",
      content: movie => (
        <span
          style={{ cursor: "pointer" }}
          onClick={() => this.props.onClick(movie)}
        >
          {movie.poster}
        </span>
      )
    },
    {
      key: "like",
      content: movie => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      )
    },
    {
      path: "publishDate",
      label: "Date"
    },
    {
      key: "delete",
      content: movie => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table // reusable table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default TableMovies;
