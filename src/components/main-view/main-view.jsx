import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      Genre: {
        Name: "Fantasy",
        Description:
          "A genre often set in an imaginary universe without any locations, events, or people from the real world.",
      },
      Image:
        "https://m.media-amazon.com/images/M/MV5BZTcxNTYyZDMtYTlmOS00Zjg4LTlmMTYtY2MxMzEyNjgyNDcwXkEyXkFqcGc@._V1_.jpg",
      Director: {
        Name: "Steven Spielberg",
        Bio: "Steven Allan Spielberg is an American filmmaker and the most successful director in film history.",
      },
      Actors: [],
      _id: "66b90f36cd0e090e39228fb5",
      Title: "Hook",
      Description:
        "When his young children are abducted by his old nemesis, Captain Hook, middle-aged lawyer Peter Banning must return to his magical origins as Peter Pan.",
      LeadActor: "Robin Williams",
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>The list is Empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie._id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
