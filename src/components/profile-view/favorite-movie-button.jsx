import { func } from "prop-types";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { addMovieToFavs, removeMovieFromFavs } from "../../api";

export const FavoriteMovieButton = ({
  Username,
  movieId,
  setUser,
  movie,
  user,
}) => {
  const storedToken = localStorage.getItem("token");
  const [isFavorite, setIsFavorite] = useState(false);
  const AddToFavs = () => {
    addMovieToFavs(storedToken, Username, movieId)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        // setIsFavorite(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const RemoveFromFavs = () => {
    removeMovieFromFavs(storedToken, Username, movieId)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        // setIsFavorite(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (!user) return;

    if (user.FavMovies.includes(movieId)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [user]);

  if (isFavorite) {
    return (
      <Button variant="outline-dark" onClick={RemoveFromFavs}>
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
};

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
