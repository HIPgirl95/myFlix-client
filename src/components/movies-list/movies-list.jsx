import React from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";
import { useSelector, useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { setFilter } from "../../redux/reducers/movies";

export const MoviesList = () => {
  const movies = useSelector((state) => state.movies.list);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.movies.filter)
    .trim()
    .toLowerCase();

  const filteredMovies = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(filter)
  );

  return (
    <>
      <Row>
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Search Movies"
            value={filter}
            onChange={(e) => dispatch(setFilter(e.target.value))}
          />
        </Col>
      </Row>
      <Row>
        {filteredMovies.map((movie) => (
          <Col className="mb-4" key={movie._id} lg={3} sm={12}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </>
  );
};
