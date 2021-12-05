import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-example-backend.herokuapp.com/api",
});

export const postComment = (comment, id, user) => {
  return newsApi
    .post(`/articles/${id}/comments`, { body: comment, username: user })
    .then((res) => {
      return res.data.comment;
    });
};
