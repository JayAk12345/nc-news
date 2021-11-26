import { useEffect, useState } from "react";
import { getOneArticle } from "../apiFunctions/getApi";
import { useParams } from "react-router-dom";

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
      <p>{article.title}</p>
      <p>{article.body}</p>
      <p>{article.author}</p>
    </section>
  );
};

export default Article;
