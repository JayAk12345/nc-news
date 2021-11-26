import { useEffect, useState } from "react";
import { getComments } from "../apiFunctions/getApi";
import { useParams } from "react-router-dom";

const Comments = () => {
  const [commentsList, setCommentsList] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getComments(id).then((comments) => {
      setCommentsList(comments);
    });
  }, []);

  return (
    <section className="comments">
      <h2>Comments:</h2>
      {commentsList.map((comment) => {
        return (
          <section>
            <p>{comment.body}</p>
            <p>{comment.author}</p>
            <p>{comment.votes}</p>
            <p>{comment.created_at}</p>
            <p>------------------------</p>
          </section>
        );
      })}
    </section>
  );
};

export default Comments;
