import { useEffect } from "react";
import { postComment } from "../apiFunctions/postApi";

const NewComment = (e) => {
  useEffect(() => {
    postComment(e).then((res) => {
      return res;
    });
  });
};

export default NewComment;
