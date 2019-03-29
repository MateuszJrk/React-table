import React from "react";
import TableMovies from "./TableMovies";
import Pagination from "./common/Pagination";
import ListGroup from "./common/ListGroup";
import Search from "./common/Search";
import { getMovies } from "../services/fakeMovieService";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";

class Movies extends React.Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
    search: ""
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];

    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => {
      return m._id !== movie._id;
    });
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies]; //copy movies
    const index = movies.indexOf(movie); //index of clicked movie
    movies[index] = { ...movies[index] }; // copy of clicked movie
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };
  // TODO: CHANGE TO ONE FUNCTION
  handleNextPage = currPage => {
    this.setState({ currentPage: currPage + 1 });
  };

  handlePrevPage = currPage => {
    this.setState({ currentPage: currPage - 1 });
  };

  handleSearch = e => {
    this.setState({ search: e.target.value });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      movies: allMovies,
      sortColumn,
      search
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id // All genres don't have an _id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const searchFilter = search
      ? sorted.filter(m => m.title.includes(search))
      : allMovies;

    const movies = paginate(searchFilter, currentPage, pageSize);

    return { totalCount: test.length, data: movies, filtered, test };
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortColumn } = this.state;

    if (count === 0) return <p>There are no movies in the database.</p>;

    const { totalCount, data: movies } = this.getPageData();

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <Search onChange={this.handleSearch} value={this.state.search} />

          <p>Showing {totalCount} movies from the database</p>

          <TableMovies
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            nextPage={this.handleNextPage}
            prevPage={this.handlePrevPage}
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}
export default Movies;
