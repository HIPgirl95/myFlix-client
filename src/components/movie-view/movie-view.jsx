import PropTypes from "prop-types";

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <div>
        <img src={movie.Image} />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.Title}</span>
        <div>{movie.Description}</div>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.DirectorName}</span>
        <div>{movie.DirectorBio}</div>
      </div>
      <div>
        <span>Starring: </span>
        <span>{movie.LeadActor}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.GenreName}</span>
        <div>{movie.GenreDescription}</div>
      </div>
      <div>
        <button onClick={onBackClick}>Back</button>
      </div>
    </div>
  );
};
