import { useState } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";

export const FavoriteMovieButton = ({ Username, movieId, setUser }) => {
  const storedToken = localStorage.getItem("token");
  const [isFavorite, setIsFavorite] = useState(false);
  const AddToFavs = () => {
    fetch(
      `https://hannah-hogan-movie-api-ea6c47e0093b.herokuapp.com/users/${Username}/movies/${movieId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${storedToken}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        setIsFavorite(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const RemoveFromFavs = () => {
    fetch(
      `https://hannah-hogan-movie-api-ea6c47e0093b.herokuapp.com/users/${Username}/movies/${movieId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${storedToken}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        setIsFavorite(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Col>
      {isFavorite ? (
        <Button variant="outline-secondary" onClick={RemoveFromFavs}>
          Favorited!
        </Button>
      ) : (
        <Button variant="secondary" onClick={AddToFavs}>
          Add to Favorites!
        </Button>
      )}
    </Col>
  );
};
