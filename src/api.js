const heroku_url = "https://hannah-hogan-movie-api-ea6c47e0093b.herokuapp.com";
const BASE_API_URL = "http://52.6.207.97";
export function createUser(data) {
  return fetch(`${BASE_API_URL}/users`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function getMovies(storedToken) {
  return fetch(`${BASE_API_URL}/movies`, {
    headers: { Authorization: `Bearer ${storedToken}` },
  });
}

export function login(data) {
  return fetch(`${BASE_API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export function deleteUser(token, username) {
  return fetch(`${BASE_API_URL}/users/${username}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function addMovieToFavs(token, username, movieId) {
  return fetch(`${BASE_API_URL}/users/${username}/movies/${movieId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
export function removeMovieFromFavs(token, username, movieId) {
  return fetch(`${BASE_API_URL}/users/${username}/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export function updateUserInfo(token, username, data) {
  return fetch(`${BASE_API_URL}/users/${username}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
