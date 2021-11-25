import ShowArticles from "./ShowArticles";
import { useState } from "react";

const Home = () => {
  return (
    <section className="topicSelector">
      <h3>Please select a topic to view</h3>

      <ShowArticles topic={topic} />
    </section>
  );
};

export default Home;
