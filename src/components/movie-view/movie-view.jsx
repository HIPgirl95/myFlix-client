import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./movie-view.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((m) => m._id === movieId);
  return (
    <>
      <Row>
        <Col>
          <div>
            <img src={movies.Image} />
          </div>
        </Col>
        <Col>
          <div>
            <h1>{movies.Title}</h1>
            <div>{movies.Description}</div>
          </div>
          <div>
            <h3>Director: </h3>
            <h4>{movies.DirectorName}</h4>
            <div>{movies.DirectorBio}</div>
          </div>
          <div>
            <h3>Starring: </h3>
            <h4>{movies.LeadActor}</h4>
          </div>
          <div>
            <h3>Genre: </h3>
            <h4>{movies.GenreName}</h4>
            <div>{movies.GenreDescription}</div>
          </div>
        </Col>
        <Row>
          <Link to={`/`}>
            <Button className="back-button">Back</Button>
          </Link>
        </Row>
      </Row>
    </>
  );
};
