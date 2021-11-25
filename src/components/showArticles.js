import { getArticles } from "../apiFunctions/getApi";
import { useEffect } from "react";
import { useState } from "react";

const ShowArticles = (topic) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles(topic).then((articles) => {
      setArticles(articles);
    });
  }, [articles]);

  return (
    <section className="topicSelector">
      <section className="articles">
        <ol>
          {articles.map((article) => {
            return <li>{article.title}</li>;
          })}
        </ol>
      </section>
    </section>
  );
};

export default ShowArticles;
