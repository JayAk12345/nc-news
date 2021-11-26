import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getVotes } from "../apiFunctions/getApi";

const Votes = () => {
  const [articleVotes, setArticleVotes] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getVotes(id).then((votes) => {
      setArticleVotes(votes);
    });
  });
  return (
    <section>
      <p>Votes:{articleVotes}</p>
    </section>
  );
};

export default Votes;
