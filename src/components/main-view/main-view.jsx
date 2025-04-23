import { useState, useEffect } from "react";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { ProfileView } from "../profile-view/profile-view";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./main-view.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NoUserNav } from "../no-user-nav/no-user-nav";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setMovies } from "../../redux/reducers/movies";
import { MoviesList } from "../movies-list/movies-list";
import { getMovies } from "../../api";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const movies = useSelector((state) => state.movies.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLoggedOut = () => {
    setUser(null);
    setToken(null);
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    if (!token) return;

    getMovies(storedToken)
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
        dispatch(setMovies(moviesFromApi));
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
        <Container>
          <Row className="justify-content-md-center">
            <Routes>
              <Route
                path="/movies/:movie_id"
                element={
                  <>
                    {!user ? (
                      <Navigate to="/" replace />
                    ) : (
                      <Col md={8}>
                        <MovieView
                          Username={user.Username}
                          user={user}
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
                    ) : (
                      <>
                        <MoviesList />
                      </>
                      // <>
                      //   {movies?.map((movie) => (
                      //     <Col className="mb-4" key={movie._id} lg={3} sm={12}>
                      //       <MovieCard movie={movie} />
                      //     </Col>
                      //   ))}
                      // </>
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
        </Container>
      </>
    );
};
