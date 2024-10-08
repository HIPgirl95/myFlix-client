import PropTypes from "prop-types";
import "./movie-view.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <>
      <Row>
        <Col>
          <div>
            <img src={movie.Image} />
          </div>
        </Col>
        <Col>
          <div>
            <h1>{movie.Title}</h1>
            <div>{movie.Description}</div>
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
          <div>
            <Button variant="info" onClick={onBackClick}>
              Back
            </Button>
          </div>
        </Row>
      </Row>
    </>
  );
};
