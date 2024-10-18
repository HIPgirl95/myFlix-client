import PropTypes from "prop-types";
import { useParams } from "react-router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { DeleteAccountButton } from "./delete-profile";
import { UpdateInfo } from "./update-info";
import { Card } from "react-bootstrap";

export const ProfileView = ({ user, onLoggedOut, movie }) => {
  return (
    <Row>
      <Col>
        <h2>Username: {user.Username}</h2>
        <div>Email: {user.Email}</div>
        <div>Birthday: {user.Birthday}</div>
      </Col>
      <Col>
        <Card>
          <Card.Title>Favorite Movies</Card.Title>
          {movie.map((movie) => (
            <Card>
              <Card.Body>
                <Col>
                  <Card.Text>{movie.Title}</Card.Text>
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
