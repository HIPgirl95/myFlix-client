import React from "react";
import { useState } from "react";

export const LoginView = () => {
  const [username, setUsername] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      access: username,
      secret: password,
    };
    fetch("https://openlibrary.org/account/login.json", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };
  return (
    <form>
      <label onSubmit={handleSubmit}>
        Username:{" "}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:{" "}
        <input
          type="password"
          value={username}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
