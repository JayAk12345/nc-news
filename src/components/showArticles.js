import { getArticles } from "../apiFunctions/getApi";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ShowArticles = () => {
  const [articles, setArticles] = useState([]);
  const { slug } = useParams();
  console.log(slug);

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
            return <li>{article.title}</li>;
          })}
        </ol>
      </section>
    </section>
  );
};

export default ShowArticles;
