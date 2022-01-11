import { getArticles } from "../apiFunctions/getApi";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const ShowArticles = () => {
  const [articles, setArticles] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    getArticles(slug).then((articles) => {
      setArticles(articles);
    });
  }, [slug]);

  return (
    <section className="topicSelector">
      <section className="articles">
        <ol className="articleContainer">
          {articles.map((article) => {
            return (
              <p className="article">
                <Link
                  to={`/article/${article.article_id}`}
                  key={article.article_id}
                >
                  {article.title}
                </Link>
                <p className="author">Author: {article.author}</p>
                <p>Date: {article.created_at.substring(0, 10)}</p>
                <p>Votes: {article.votes}</p>
              </p>
            );
          })}
        </ol>
      </section>
    </section>
  );
};

export default ShowArticles;
