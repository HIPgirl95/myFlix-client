import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./movie-view.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FavoriteMovieButton } from "../profile-view/favorite-movie-button";

export const MovieView = ({ movies, Username, user, setUser }) => {
  const { movie_id } = useParams();
  const movie = movies.find((m) => m._id === movie_id);
  return (
    <>
      <Row>
        <Col>
          <div>
            <img className="w-100" src={movie.Image} />
          </div>
        </Col>
        <Col>
          <div>
            <h1>{movie.Title}</h1>
            <div>{movie.MovieDescription}</div>
          </div>
          <div>
            <h3>Director: </h3>
            <h4>{movie.DirectorName}</h4>
            <div>{movie.DirectorBio}</div>
          </div>
          <div>
            <h3>Starring: </h3>
            <h4>{movie.LeadActor}</h4>
          </div>
          <div>
            <h3>Genre: </h3>
            <h4>{movie.GenreName}</h4>
            <div>{movie.GenreDescription}</div>
          </div>
        </Col>
        <Row>
          <Col>
            <FavoriteMovieButton
              Username={Username}
              movieId={movie_id}
              setUser={setUser}
              movie={movies}
              user={user}
            />
          </Col>
          <Link to={`/`}>
            <Button className="back-button">Home</Button>
          </Link>
        </Row>
      </Row>
    </>
  );
};
