import { useParams } from "react-router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const ProfileView = ({ users }) => {
  const { Username } = useParams();
  const user = users.find((U) => U.Username === Username);
  return (
    <>
      <Row>
        <Col>
          <div>
            <h1>{user.Username}</h1>
            <div>{user.Email}</div>
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
