import React from "react";
import { Link } from "react-router-dom";
import TableMovies from "./TableMovies";
import Pagination from "./common/Pagination";
import ListGroup from "./common/ListGroup";
import Search from "./common/Search";
import Modal from "./modal/Modal";
import Poster from "./modal/Poster";
import Favourites from "./Favourites";
import PageSize from "./common/PageSize";
import { getMovies } from "../services/fakeMovieService";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";

class Movies extends React.Component {
  state = {
    movies: [],
    genres: [],
    pageSize: { value: 5 },
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
    search: "",
    selectGenre: null,
    poster: null,
    liked: false,
    favouriteMovies: []
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
    movies[index] = { ...movies[index] }; // copy of clicked movies

    movies[index].liked = !movies[index].liked;

    const favouriteMovies = [...this.state.favouriteMovies];

    if (!favouriteMovies.includes(movie.title))
      favouriteMovies.push(movie.title);
    let favourites = [];
    if (!movie.liked) favourites.push(movie);
    console.log(favourites);
    // Local Storage
    localStorage.setItem("myFavouriteMovies", JSON.stringify(favouriteMovies));

    this.setState({
      movies,
      liked: !this.state.liked,
      favouriteMovies
    });
    console.log(favouriteMovies);
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre, like) => {
    this.setState({ selectedGenre: genre, like, search: "", currentPage: 1 });
  };
  handleSearch = query => {
    this.setState({ search: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handleNextPage = currPage => {
    this.setState({ currentPage: currPage + 1 });
  };
  handleSelect = e => {
    this.setState({ pageSize: { value: e.target.value } });
  };

  handlePrevPage = currPage => {
    this.setState({ currentPage: currPage - 1 });
  };
  handleClick = movie => {
    this.setState({ poster: movie.poster.props.src });
  };
  handleModalClose = () => {
    this.setState({ poster: null });
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

    let filtered = allMovies;
    if (search)
      filtered = allMovies.filter(m =>
        m.title.toLowerCase().includes(search.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize.value);

    return { totalCount: sorted.length, data: movies };
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
            onLikeSelect={this.handleLikeSelect}
          />
        </div>
        <div className="col">
          <Search onChange={this.handleSearch} value={this.state.search} />
          <Link
            to="/movies/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Movie
          </Link>
          <p>Showing {totalCount} movies from the database</p>
          <PageSize
            pageSize={this.state.pageSize}
            onChange={this.handleSelect}
          />

          <TableMovies
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            onClick={this.handleClick}
          />
          <Pagination
            nextPage={this.handleNextPage}
            prevPage={this.handlePrevPage}
            onPageChange={this.handlePageChange}
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
          />

          <Modal show={this.state.poster} modalClose={this.handleModalClose}>
            <Poster poster={this.state.poster} />
          </Modal>
          <Favourites onLike={this.handleLike} data={this.state} />
        </div>
      </div>
    );
  }
}
export default Movies;
