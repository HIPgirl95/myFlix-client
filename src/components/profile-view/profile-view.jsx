import PropTypes from "prop-types";
import { useParams } from "react-router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { DeleteAccountButton } from "./delete-profile";

export const ProfileView = ({ user, onLoggedOut }) => {
  return (
    <Row>
      <Col>
        <div>
          <h2>Username: {user.Username}</h2>
          <div>Email: {user.Email}</div>
        </div>
      </Col>
      <Col>
        <h3>Favorite Movies</h3>
      </Col>
      <Row>
        <Col>
          <Link to={`/`}>
            <Button className="back-button">Back</Button>
          </Link>
        </Col>
        <Col>
          <DeleteAccountButton
            Username={user.Username}
            onLoggedOut={onLoggedOut}
          />
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
