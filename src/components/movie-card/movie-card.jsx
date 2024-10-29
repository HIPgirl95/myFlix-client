import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import "./movie-card.scss";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  return (
    <Card className="h-100" id="movie-card">
      <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
        <Button variant="light" id="open-movie">
          <Card.Header id="title">{movie.Title}</Card.Header>
          <Card.Img className="movieCardImg" variant="top" src={movie.Image} />
        </Button>
      </Link>
      <Card.Body>
        <Card.Text>Starring: {movie.LeadActor}</Card.Text>
        <Card.Text>Directed by: {movie.DirectorName}</Card.Text>
        {/* <Link to={`/movies/${encodeURIComponent(movie._id)}`}> */}
        {/* <Button variant="link" id="open-movie">
            Open
          </Button> */}
        {/* </Link> */}
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.string,
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
    }),
  }).isRequired,
};
