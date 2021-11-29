import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-example-backend.herokuapp.com/api",
});

//get user state here so knows where to send to
export const postComment = (comment, id, user) => {
  console.log(comment);
  return newsApi
    .post(`/articles/${id}/comments`, { body: comment, username: user })
    .then((res) => {
      console.log(res);
      return res;
    });
};

// export const postComment = (comment, id) => {
//   axios({
//     method: "post",
//     url: `https://nc-news-example-backend.herokuapp.com/api/articles/${id}/comments`,
//     data: {
//       body: comment,
//     },
//   });
// };
