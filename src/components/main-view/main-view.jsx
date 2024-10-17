import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { ProfileView } from "../profile-view/profile-view";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "./main-view.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NoUserNav } from "../no-user-nav/no-user-nav";
import { useNavigate } from "react-router-dom";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const onLoggedOut = () => {
    setUser(null);
    setToken(null);
    localStorage.clear();
    navigate("/");
  };

  // useEffect(() => {
  //   if (!token) return;
  //   fetch("https://hannah-hogan-movie-api-ea6c47e0093b.herokuapp.com/users", {
  //     headers: { Authorization: `Bearer ${token}` },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const userFromApi = data.map((doc) => {
  //         return {
  //           _id: doc._id,
  //           Username: doc.Username,
  //         };
  //       });
  //       setUser(userFromApi);
  //     });
  // }, [token]);

  useEffect(() => {
    if (!token) return;

    fetch("https://hannah-hogan-movie-api-ea6c47e0093b.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.map((doc) => {
          return {
            _id: doc._id,
            Image: doc.Image,
            Title: doc.Title,
            MovieDescription: doc.Description,
            GenreName: doc.Genre.Name,
            GenreDescription: doc.Genre.Description,
            DirectorName: doc.Director.Name,
            DirectorBio: doc.Director.Bio,
            LeadActor: doc.LeadActor,
          };
        });
        setMovies(moviesFromApi);
      });
  }, [token]);

  if (!user)
    return (
      <>
        <NoUserNav />
        <Row className="justify-content-md-center">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {user ? (
                    <Navigate to="/" />
                  ) : (
                    <Col md={5}>
                      <h3>Log in</h3>
                      <LoginView
                        onLoggedIn={(user, token) => {
                          setUser(user);
                          setToken(token);
                        }}
                      />
                      <h3>Or Sign up!</h3>
                      <SignupView />
                    </Col>
                  )}
                </>
              }
            />{" "}
          </Routes>
        </Row>
      </>
    );
  else
    return (
      <>
        <NavigationBar user={user} onLoggedOut={onLoggedOut} />
        <Row className="justify-content-md-center">
          <Routes>
            <Route
              path="/movies/:movie_id"
              element={
                <>
                  {!user ? (
                    <Navigate to="/" replace />
                  ) : movies.length === 0 ? (
                    <Col>The list is Empty!</Col>
                  ) : (
                    <Col md={8}>
                      <MovieView
                        movies={movies}
                        Username={user.Username}
                        setUser={setUser}
                      />
                    </Col>
                  )}
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  {!user ? (
                    <Navigate to="/" replace />
                  ) : movies.length === 0 ? (
                    <Col>The list is Empty!</Col>
                  ) : (
                    <>
                      {movies.map((movie) => (
                        <Col className="mb-4" key={movie._id} md={3}>
                          <MovieCard movie={movie} />
                        </Col>
                      ))}
                    </>
                  )}
                </>
              }
            />
            <Route
              path="/users/:user_id"
              element={
                <>
                  {!user ? (
                    <Navigate to="/" replace />
                  ) : (
                    <Col md={8}>
                      <ProfileView
                        user={user}
                        onLoggedOut={onLoggedOut}
                        movie={movies}
                      />
                    </Col>
                  )}
                </>
              }
            />
          </Routes>
        </Row>
      </>
    );
};
