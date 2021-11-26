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
        <ol>
          {articles.map((article) => {
            return (
              <Link
                to={`/article/${article.article_id}`}
                key={article.article_id}
              >
                {article.title}
              </Link>
            );
          })}
        </ol>
      </section>
    </section>
  );
};

export default ShowArticles;
