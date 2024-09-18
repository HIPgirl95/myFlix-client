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
    {
      Genre: {
        Name: "Adventure",
        Description:
          "A genre that often features a protagonist in a dangerous situation or going on an epic journey.",
      },
      Image:
        "https://m.media-amazon.com/images/I/71fRbA8AX4L._AC_UF894,1000_QL80_.jpg",
      Director: {
        Name: "Steven Spielberg",
        Bio: "Steven Allan Spielberg is an American filmmaker and the most commercially successful director in film history.",
      },
      Actors: [],
      _id: "66b91256cd0e090e39228fb8",
      Title: "Indiana Jones and the Raiders of the Lost Ark",
      Description:
        "Indiana Jones tries to beat a band of Nazis to a unique religious relic which is central to their plans for world domination.",
      LeadActor: "Harrison Ford",
    },
    {
      Genre: {
        Name: "Adventure",
        Description:
          "A genre that often features a protagonist in a dangerous situation or going on an epic journey.",
      },
      Image: "https://i.ebayimg.com/images/g/md4AAOSwOfVfjIhe/s-l1200.jpg",
      Director: {
        Name: "Steven Spielberg",
        Bio: "Steven Allan Spielberg is an American filmmaker and the most commercially successful director in film history.",
      },
      Actors: [],
      _id: "66b9119dcd0e090e39228fb7",
      Title: "Indiana Jones and the Temple of Doom",
      Description:
        "Indiana Jones goes in search of the magical Sankara stone, and uncovers an ancient evil which threatens all who come into contact with it.",
      LeadActor: "Harrison Ford",
    },
    {
      Genre: {
        Name: "Adventure",
        Description:
          "A genre that often features a protagonist in a dangerous situation or going on an epic journey.",
      },
      Image:
        "https://m.media-amazon.com/images/I/61PNQpAI6fL._AC_UF894,1000_QL80_.jpg",
      Director: {
        Name: "Steven Spielberg",
        Bio: "Steven Allan Spielberg is an American filmmaker and the most commercially successful director in film history.",
      },
      Actors: [],
      _id: "66b910a6cd0e090e39228fb6",
      Title: "Indiana Jones and the Last Crusade",
      Description:
        "Indiana Jones sets out to rescue his father, who has vanished while searching for the Holy Grail.",
      LeadActor: "Harrison Ford",
    },
    {
      Genre: {
        Name: "Romance",
        Description:
          "A genre that primarily focuses on the relationship and romantic love between two people, typically with an emotionally satisfying and optimistic ending.",
      },
      Image:
        "https://m.media-amazon.com/images/I/51pYRivXpBL._AC_UF894,1000_QL80_.jpg",
      Director: {
        Name: "Rob Reiner",
        Bio: "Robert Reiner is an American actor, film director, screenwriter, and producer.",
      },
      Actors: [],
      _id: "66b918d7cd0e090e39228fb9",
      Title: "The Princess Bride",
      Description:
        "A fairy tale adventure about a beautiful young woman and her one true love. They must battle the evils of the mythical kingdom of Florin to be reunited with each other.",
      LeadActor: "Cary Elwes",
    },
    {
      Genre: {
        Name: "Fantasy",
        Description:
          "A genre often set in an imaginary universe without any locations, events, or people from the real world.",
      },
      Image:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg",
      Director: {
        Name: "Peter Jackson",
        Bio: "This man somehow created one of the most timeless movie series of all time. I cannot imagine these movies being any better than they are.",
      },
      Actors: [],
      _id: "66b91c97cd0e090e39228fbb",
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Description:
        "The future of civilization rests in the fate of the One Ring. When a young Hobbit named Frodo Baggins inherits the ring, a daunting task lies before him: destroy the One Ring in the fires of Mount Doom where it was forged.",
      LeadActor: "Elijah Wood",
    },
    {
      Genre: {
        Name: "Fantasy",
        Description:
          "A genre often set in an imaginary universe without any locations, events, or people from the real world.",
      },
      Image:
        "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
      Director: {
        Name: "Peter Jackson",
        Bio: "This man somehow created one of the most timeless movie series of all time. I cannot imagine these movies being any better than they are.",
      },
      Actors: [],
      _id: "66b91e56cd0e090e39228fbc",
      Title: "The Lord of the Rings: The Two Towers",
      Description:
        "Frodo and Sam discover they are being followed by the mysterious Gollum. Meanwhile, Aragorn, Legolas, and Gimli encounter the besieged kingdom of Rohan, whose once great King Theoden has fallen under Saruman's deadly spell.",
      LeadActor: "Viggo Mortensen",
    },
    {
      Genre: {
        Name: "Fantasy",
        Description:
          "A genre often set in an imaginary universe without any locations, events, or people from the real world.",
      },
      Image:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
      Director: {
        Name: "Peter Jackson",
        Bio: "This man somehow created one of the most timeless movie series of all time. I cannot imagine these movies being any better than they are.",
      },
      Actors: [],
      _id: "66b91f8ccd0e090e39228fbd",
      Title: "The Lord of the Rings: The Return of the King",
      Description:
        "Frodo and Sam reach Morder in their quest to destroy the One Ring, while Aragorn leads the forces of good against Sauron's evil army at the stone city of Minas Tirith.",
      LeadActor: "Elijah Wood",
    },
    {
      Genre: {
        Name: "Romance",
        Description:
          "A genre that primarily focuses on the relationship and romantic love between two people, typically with an emotionally satisfying and optimistic ending.",
      },
      Image:
        "https://m.media-amazon.com/images/M/MV5BMTIwNDkyMjQ3MF5BMl5BanBnXkFtZTYwNDM2MjI5._V1_FMjpg_UX1000_.jpg",
      Director: {
        Name: "Rob Reiner",
        Bio: "Robert Reiner is an American actor, film director, screenwriter, and producer.",
      },
      Actors: [],
      _id: "66b919e3cd0e090e39228fba",
      Title: "When Harry Met Sally",
      Description:
        "I have actually never seen this movie. I just wanted a second one that Rob Reiner directed.",
      LeadActor: "Meg Ryan",
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
