import showArticles from "./showArticles";
import { useState } from "react";
import showArticles from "./showArticles";

const Home = () => {
  const [topic, setTopic] = useState(null);
  const topicSelector = () => {};

  

  return (
    <section className="topicSelector">
      <h3>Please select a topic to view</h3>
      <form onSubmit={showArticles}>
        <select id="topic" name="category">
          <option value="all">All</option>
          <option
            onChange={(e) => {
              console.log(e);
              setTopic(e.target.value);
            }}
            value="Coding"
          >
            Coding
          </option>
          <option
            onChange={(e) => {
              console.log("foot");
              setTopic("Football");
            }}
            value="Football"
          >
            Football
          </option>
          <option
            onChange={(e) => {
              setTopic(e.target.value);
            }}
          >
            Cooking
          </option>
        </select>
      </form>

      <showArticles topic={topic}>
    </section>



  );
};

export default Home;
