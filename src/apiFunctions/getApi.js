import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-example-backend.herokuapp.com/api",
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
