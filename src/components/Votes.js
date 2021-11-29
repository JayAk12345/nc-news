import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getVotes } from "../apiFunctions/getApi";

const Votes = () => {
  const [articleVotes, setArticleVotes] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getVotes(id).then((votes) => {
      setArticleVotes(votes);
      console.log(articleVotes);
    });
  }, [articleVotes]);
  return (
    <section>
      <p>{articleVotes}</p>
    </section>
  );
};

export default Votes;
