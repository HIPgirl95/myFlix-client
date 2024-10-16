import { Button } from "react-bootstrap";
import { useState } from "react";

export const FavMovieButton = () => {
  const [isToggled, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!isToggled);
  };

  return (
    <Button onClick={handleToggle} variant="outline-secondary">
      {isToggled ? "Favorited!" : "Add to favorites"}
    </Button>
  );
};
