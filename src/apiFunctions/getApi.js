import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-vggw.onrender.com/api",
});

export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const getArticles = (topic_slug) => {
  if (topic_slug === undefined || topic_slug === "all") {
    return newsApi.get("/articles").then(({ data }) => {
      return data.articles;
    });
  } else {
    return newsApi.get(`/articles?topic=${topic_slug}`).then(({ data }) => {
      return data.articles;
    });
  }
};

export const getOneArticle = (id) => {
  return newsApi.get(`/articles/${id}`).then(({ data }) => {
    return data.article;
  });
};

export const getComments = (id) => {
  return newsApi.get(`/articles/${id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const getVotes = (id) => {
  return newsApi.get(`/articles/${id}`).then(({ data }) => {
    return data.article.votes;
  });
};

export const getUserByUsername = () => {
  return newsApi
    .get("/api/users/weegenbump")
    .then((res) => {
      console.log(res, "getUserByUsername");
      return res;
    })
    .catch((err) => {
      console.log(err, "err");
    });
};
