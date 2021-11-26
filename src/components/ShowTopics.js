import { useEffect } from "react";
import { getTopics } from "../apiFunctions/getApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ShowTopics = (topic, setTopic) => {
  const [topicList, setTopicList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTopics().then((topics) => {
      setTopicList(topics);
    });
  }, []);

  return (
    <select
      id="topic"
      name="category"
      onChange={(e) => {
        const selectedTopic = e.target.value;
        navigate(`/topics/${selectedTopic}/articles`);
      }}
    >
      <option value="select" selected disabled>
        Please select a topic
      </option>
      <option value="all">All</option>
      {topicList.map((individualTopic) => {
        return (
          <option key={individualTopic.slug} value={individualTopic.slug}>
            {individualTopic.slug}
          </option>
        );
      })}
    </select>
  );
};

export default ShowTopics;
