import React from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";

export const MoviesList = () => {
  const movies = useSelector((state) => state.movies.list);

  return (
    <>
      <Row>
        {movies.map((movie) => (
          <Col className="mb-4" key={movie._id} lg={3} sm={12}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </>
  );
};
