import React from "react";
import { Form } from "react-bootstrap";
import { useState } from "react";

export const searchBar = ({ movie }) => {
  const [searchInput, setSearchInput] = useState("");

  const search = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);

    if (searchInput.length > 0) {
      movie.filter((searchInput) => {
        return movie.Title.match(searchInput);
      });
    }
  };

  return (
    <input
      type="text"
      placeholder="Search Movies"
      onChange={search}
      value={searchInput}
    />
  );
};
