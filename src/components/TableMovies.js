import React, { Component } from "react";
import { Link } from "react-router-dom";
import Data from "./common/Table";
import Like from "./common/Like";

class TableMovies extends Component {
  state = { collapse: false };

  toggle = () => {
    this.setState(state => ({ collapse: !state.collapse }));
  };
  columns = [
    {
      path: "title",
      label: "Title",
      content: movie => (
        <>
          <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
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
      path: "liked",

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
    },
    {
      key: "description",
      content: movie => (
        <div>
          <i
            className="fas fa-arrow-down"
            style={{ padding: "5px" }}
            onClick={() => this.toggle(movie)}
          />
        </div>
      )
    }
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Data // reusable table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
        collapse={this.state.collapse}
      />
    );
  }
}

export default TableMovies;
