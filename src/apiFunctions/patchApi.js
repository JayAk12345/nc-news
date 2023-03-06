import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-vggw.onrender.com/api",
});

//vote will be + or = 1

export const incVotes = (id, vote, user, setVoteMessage) => {
  console.log(id, "Id");

  if (user === null) {
    setVoteMessage("Please sign in to vote");
  } else {
    return newsApi
      .patch(`/articles/${id}`, { inc_votes: vote })
      .then((res) => {
        console.log(res.data.article.votes);
        return res.data.article.votes;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //remove this as wont change file
  //handle in component
};
