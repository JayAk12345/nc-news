import { useEffect, useState } from "react";
import { getComments } from "../apiFunctions/getApi";
import { useParams } from "react-router-dom";
import { deleteComment } from "../apiFunctions/deleteApi";

const Comments = ({ commentsList, setCommentsList }) => {
  const { id } = useParams();
  useEffect(() => {
    getComments(id).then((comments) => {
      setCommentsList(comments);
    });
  }, [commentsList]);

  return (
    <section className="comments">
      <h2 className="commentTitle">Comments:</h2>
      {commentsList.map((comment) => {
        return (
          <section key={comment.comment_id}>
            <p>{comment.body}</p>
            <p>{comment.author}</p>
            <p>{comment.votes}</p>
            <p>{comment.created_at}</p>
            <p>{comment.comment_id}</p>
            <button
              onClick={() => {
                deleteComment(comment.comment_id);
              }}
            >
              Delete Comment
            </button>
            <p>------------------------</p>
          </section>
        );
      })}
    </section>
  );
};

export default Comments;
