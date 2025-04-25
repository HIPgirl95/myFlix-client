const heroku_url = "https://hannah-hogan-movie-api-ea6c47e0093b.herokuapp.com";
const local_dev_URL = "http://localhost:8080";
const LoadBalancer_URL =
  "http://HannahHogan-CF-22-LoadBalancer-527630731.us-east-1.elb.amazonaws.com";
const Active_URL = local_dev_URL;
export function createUser(data) {
  return fetch(`${Active_URL}/users`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export const uploadImages = async (formData, token) => {
  return fetch(`${Active_URL}/images`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
};

export const getImages = async (token) => {
  return fetch(`${Active_URL}/images`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export function getMovies(token) {
  return fetch(`${Active_URL}/movies`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export function login(data) {
  return fetch(`${Active_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export function deleteUser(token, username) {
  return fetch(`${Active_URL}/users/${username}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function addMovieToFavs(token, username, movieId) {
  return fetch(`${Active_URL}/users/${username}/movies/${movieId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
export function removeMovieFromFavs(token, username, movieId) {
  return fetch(`${Active_URL}/users/${username}/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export function updateUserInfo(token, username, data) {
  return fetch(`${Active_URL}/users/${username}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
