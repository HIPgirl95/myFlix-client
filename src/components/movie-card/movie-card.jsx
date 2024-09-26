import PropTypes from "prop-types";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div id="main-view-div">
      <span
        id="main-view-title"
        onClick={() => {
          onMovieClick(movie);
        }}
      >
        {movie.Title}
      </span>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Image: PropTypes.string.isRequired,
    Description: PropTypes.string,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string,
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string,
      Bio: PropTypes.string,
    }).isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
