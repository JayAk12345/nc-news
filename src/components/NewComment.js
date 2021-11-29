import { useEffect } from "react";
import { postComment } from "../apiFunctions/postApi";

const NewComment = (e) => {
  console.log(e);
  useEffect(() => {
    postComment(e).then((res) => {
      console.log(res);
    });
  });

  return <section></section>;
};

export default NewComment;
