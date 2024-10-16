import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { Form } from "react-bootstrap";

export const UpdateInfo = ({ Username }) => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const storedToken = localStorage.getItem("token");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday,
    };
    fetch(
      `https://hannah-hogan-movie-api-ea6c47e0093b.herokuapp.com/users/${Username}`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      }
    ).catch((err) => {
      console.error(err);
    });
  };
  return (
    <>
      <Button onClick={() => setShowModal(true)} variant="secondary">
        Update info
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header>Update Personal Information</Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUpdateUsername">
              <Form.Label>Username: </Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                minLength={3}
              />
            </Form.Group>
            <Form.Group controlId="formUpdatePassword">
              <Form.Label>Password: </Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formUpdateEmail">
              <Form.Label>Email: </Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formUpdateBirthday">
              <Form.Label>Birthday: </Form.Label>
              <Form.Control
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
