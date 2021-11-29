import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-example-backend.herokuapp.com/api",
});

//vote will be + or = 1

export const incVotes = (id, vote) => {
  console.log(id);
  return newsApi
    .patch(`/articles/${id}`, { inc_votes: vote })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};
