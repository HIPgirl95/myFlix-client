import React from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";

export const MoviesList = () => {
  const movies = useSelector((state) => state.movies);

  return (
    <>
      <Row>
        {movies?.map((movie) => (
          <Col key={movie._id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </>
  );
};
