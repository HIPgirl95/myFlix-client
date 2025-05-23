import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { DeleteAccountButton } from "./delete-profile";
import { UpdateInfo } from "./update-info";
import { Card } from "react-bootstrap";
import "./profile-view.scss";
import { useSelector } from "react-redux";
import { Suggestions } from "../suggestions/suggestions";

const formatBirthday = (birthday) => {
  const [year, month, day] = birthday.split("T")[0].split("-");
  return `${month}/${day}/${year}`;
};

export const ProfileView = ({ user, onLoggedOut }) => {
  const movie = useSelector((state) => state.movies.list);
  let favMovies = movie.filter((m) => user.FavMovies.includes(m._id));
  return (
    <Row>
      <Col sm={12} lg={4}>
        <h2>{user.Username}</h2>
        <div>Email: {user.Email}</div>
        <div>Birthday: {formatBirthday(user.Birthday)}</div>
      </Col>
      <Col>
        <h5>
          <Suggestions />
        </h5>
        <Card id="fav-movie-card">
          <Card.Title>Favorite Movies</Card.Title>
          {favMovies.map((movie) => (
            <Card key={movie._id} id="fav-movie">
              <Card.Body>
                <Col>
                  {/* <Card.Text>{movie.Title}</Card.Text> */}
                  <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
                    <Button variant="outline-dark">{movie.Title}</Button>
                  </Link>
                </Col>
              </Card.Body>
            </Card>
          ))}
        </Card>
        <UpdateInfo Username={user.Username} onLoggedOut={onLoggedOut} />
        <DeleteAccountButton
          Username={user.Username}
          onLoggedOut={onLoggedOut}
        />
      </Col>
      <Row>
        {" "}
        <Col>
          <Link to={`/`}>
            <Button className="back-button">Back</Button>
          </Link>
        </Col>
      </Row>
    </Row>
  );
};

ProfileView.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string,
    Username: PropTypes.string,
  }).isRequired,
};
