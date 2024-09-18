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
        <span>{movie.Director.Name}</span>
        <div>{movie.Director.Bio}</div>
      </div>
      <div>
        <span>Starring: </span>
        <span>{movie.LeadActor}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.Genre.Name}</span>
        <div>{movie.Genre.Description}</div>
      </div>
      <div>
        <button onClick={onBackClick}>Back</button>
      </div>
    </div>
  );
};
