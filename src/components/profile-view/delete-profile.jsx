import { useState } from "react";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const deleteAccountButton = ({ username, token, onLoggedOut }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate;
  const storedToken = localStorage.getItem("token");
};
