import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-example-backend.herokuapp.com/api",
});

//vote will be + or = 1

export const incVotes = (id, vote) => {
  console.log(id, "Id");
  return newsApi
    .patch(`/articles/${id}`, { inc_votes: vote })
    .then((res) => {
      console.log(res.data.article.votes);
      return res.data.article.votes;
    })
    .catch((err) => {
      console.log(err);
    });
  //remove this as wont change file
  //handle in component
};
