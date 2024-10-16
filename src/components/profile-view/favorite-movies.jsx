export const FavoriteMovies = ({ Username, movieId }) => {
  const storedToken = localStorage.getItem("token");
  const AddToFavs = () => {
    fetch(
      `https://hannah-hogan-movie-api-ea6c47e0093b.herokuapp.com/users/${Username}/movies/${movieId}`,
      {
        method: "POST",
        headers: { Autorizations: `Bearer ${storedToken}` },
      }
    );
  };
  const RemoveFromFavs = () => {};
  return <h3>Favorite Movies!</h3>;
};
