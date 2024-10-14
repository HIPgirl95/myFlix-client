import PropTypes from "prop-types";
import { useParams } from "react-router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const ProfileView = ({ users }) => {
  const { user_id } = useParams();
  const user = users.find((u) => u._id === user_id);
  return (
    <>
      <Row>
        <Col>
          <div>
            <h1>{user.Username}</h1>
            {/* <div>{user.Email}</div> */}
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

ProfileView.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string,
    Username: PropTypes.string,
  }).isRequired,
};
