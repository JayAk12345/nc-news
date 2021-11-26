import { useEffect, useState } from "react";
import { getOneArticle } from "../apiFunctions/getApi";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import Votes from "./Votes";

const Article = () => {
  const [article, setArticle] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getOneArticle(id).then((article) => {
      setArticle(article);
    });
  }, []);

  return (
    <section className="article">
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <p>{article.author}</p>
      <Votes />
      <Comments />
    </section>
  );
};

export default Article;
