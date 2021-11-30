import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getVotes } from "../apiFunctions/getApi";

const Votes = ({ articleVotes, setArticleVotes }) => {
  const { id } = useParams();

  useEffect(() => {
    getVotes(id).then((votes) => {
      setArticleVotes(votes);
    });
  }, [articleVotes]);
  return (
    <section>
      <p>{articleVotes}</p>
    </section>
  );
};

export default Votes;
