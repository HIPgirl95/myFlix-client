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
