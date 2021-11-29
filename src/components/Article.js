import { useEffect, useState } from "react";
import { getOneArticle } from "../apiFunctions/getApi";
import { incVotes } from "../apiFunctions/patchApi";
import { postComment } from "../apiFunctions/postApi";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import NewComment from "./NewComment";
import Votes from "./Votes";

const Article = ({ user, setUser }) => {
  const [article, setArticle] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getOneArticle(id).then((article) => {
      setArticle(article);
    });
  }, []);

  const newComment = (e) => {
    e.preventDefault();
    const comment = e.target[0].value;
    postComment(comment, id, user).then((res) => {
      console.log(res);
      <p>Sent</p>;
    });
  };

  return (
    <section className="article">
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <p>{article.author}</p>
      <Votes />
      <button
        onClick={() => {
          incVotes(id, +1);
        }}
      >
        upvote!
      </button>

      <h3>New comment:</h3>
      <form onSubmit={newComment} id="comment">
        <label for="comment">New comment:</label>
        <input type="input" id="comment" name="comment"></input>
        <button type="submit">Submit</button>
      </form>
      <Comments />
    </section>
  );
};

export default Article;
