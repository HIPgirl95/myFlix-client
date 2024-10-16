import { Container } from "react-bootstrap";
import { FavMovieButton } from "../fav-movie-button/fav-movie-button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const FavoriteMovies = ({ FavoriteMoviesList }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Favorite Movies</h3>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
};
