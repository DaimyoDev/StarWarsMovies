import React from "react";
import { fetchMovies } from "../actions";
import { connect } from "react-redux";
class RenderMovies extends React.Component {
  componentDidMount() {
    this.props.fetchMovies();
  }
  renderList() {
    if (this.props.movies.results === undefined) {
      return "";
    } else {
      return this.props.movies.results.map((movie) => {
        return (
          <div className="flex items-center overflow-hidden">
            <div
              key={movie.title}
              className="bg-neutral-200 m-10 w-[500px] h-[500px] rounded-md shadow-md"
            >
              <h1 className="text-emerald-500 text-4xl text-center m-3 uppercase font-bold drop-shadow-lg">
                {movie.title}
              </h1>
              <h2 className="text-sky-600 text-2xl m-3 text-center">
                Movie Episode: {movie.episode_id}
              </h2>
              <h2 className="text-sky-600 text-2xl m-3 text-center">
                Director: {movie.director}
              </h2>
              <h2 className="text-sky-600 text-2xl m-3 text-center">
                Producer: {movie.producer}
              </h2>
              <h2 className="text-sky-600 text-2xl m-3 text-center">
                Release Date: {movie.release_date}
              </h2>
            </div>
          </div>
        );
      });
    }
  }
  render() {
    return (
      <div className="grid grid-cols-3 grid-rows-2 overflow-hidden">
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { movies: state.movies };
};

export default connect(mapStateToProps, { fetchMovies })(RenderMovies);
