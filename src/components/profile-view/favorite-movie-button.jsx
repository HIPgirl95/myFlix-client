import { useState } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";

export const FavoriteMovieButton = ({
  Username,
  movieId,
  setUser,
  user,
  movie,
}) => {
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

  let favMovie = movie.filter((m) => user.FavMovies.includes(m._id));

  if ((movieId = favMovie._id)) {
    return (
      <Button variant="outline-danger" onClick={RemoveFromFavs}>
        Remove from Favorites!
      </Button>
    );
  } else {
    return (
      <Button variant="secondary" onClick={AddToFavs}>
        Add to Favorites!
      </Button>
    );
  }

  // return (
  //   <Col>
  //     {favMovies ? (
  //       <Button variant="outline-danger" onClick={RemoveFromFavs}>
  //         Remove from Favorites!
  //       </Button>
  //     ) : (
  //       <Button variant="secondary" onClick={AddToFavs}>
  //         Add to Favorites!
  //       </Button>
  //     )}
  //   </Col>
  // );
};
