import { useState } from "react";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../../api";

export const DeleteAccountButton = ({ Username, onLoggedOut }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("token");

  const handleDelete = (event) => {
    deleteUser(storedToken, Username).then((response) => {
      if (response.ok) {
        alert("Account Deleted");
      } else {
        alert("Unable to Delete Account");
      }
      onLoggedOut();
      navigate("/");
    });
  };
  return (
    <>
      <Button onClick={() => setShowModal(true)} variant="danger">
        Delete Account
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure?</Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowModal(false)}>No</Button>
          <Button
            variant="danger"
            onClick={() => {
              handleDelete();
              setShowModal(false);
            }}
          >
            Delete!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
