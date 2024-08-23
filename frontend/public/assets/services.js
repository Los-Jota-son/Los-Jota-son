import { API_URL } from './constants'

export const createPost = async ({ imagen, video, description }) => {
  return fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({ imagen, video, description }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const getAllPosts = async () => {
  return fetch(API_URL).then((response) => response.json());
};
export const deletePost = (id) => {
  return fetch(API_URL + `/${id}`, {
    method: "DELETE",
  });
};

export const updatePost = (id, { imagen, video, description }) => {
  return fetch(API_URL + `/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      imagen,
      video,
      description,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};