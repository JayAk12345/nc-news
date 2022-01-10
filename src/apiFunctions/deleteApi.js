import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-example-backend.herokuapp.com/api",
});

export const deleteComment = (id) => {
  console.log(id);
  return newsApi
    .delete(`/comments/${id}`)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};
