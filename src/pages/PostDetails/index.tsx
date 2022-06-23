import * as React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { removeToken } from "../../services/auth";
import { getComments, getPostDetails } from "../../services/post";
import { getUserDetails } from "../../services/user";

import DeleteIcon from '@material-ui/icons/Delete';
import * as C from "./styles";
import { IUser } from "../../interfaces/user";
import { IComment, IPostDetails } from "../../interfaces/post";

const baseUrl = "https://jsonplaceholder.typicode.com";

const PostDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [postDetails, setPostDetails] = useState<IPostDetails>();
  const [user, setUser] = useState<IUser>();
  const [comments, setComments] = useState<IComment[]>([]);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    getPostDetails(setPostDetails, id);
    getUserDetails(setUser, postDetails?.userId);
  }, [postDetails?.userId]);

  const goToPosts = () => {
    navigate("/posts");
  };

  const goToComments = () => {
    getComments(setComments, id);
    setShowComments(!showComments);
  }

  const logout = () => {
    removeToken();
    navigate("/");
    window.location.reload();
  }

  return (
    <C.Container>
      <h2>Post Details</h2>
      <C.Button type="button" onClick={() => logout()}>Logout</C.Button> 
      <C.Button type="button" onClick={() => goToPosts()}>Voltar Posts</C.Button>
      {user &&
        <>
          <p>{user.name}</p>
          <p>{`@${user.username}`.toLowerCase()}</p>
        </>
      }
      {postDetails &&
        <>
        <h3>{postDetails.title}</h3>
        <p>{postDetails.body}</p>
        </>
      }
      <C.Button type="button" onClick={() => goToComments()}>{!showComments ? <>Ver Comentários</> : <>Ocultar Comentários</>}</C.Button>
      {showComments && comments.map((item) => {
        return (
          <>
          <p>{item.email}</p>
          <p>{item.name}</p>
          <p>{item.body}</p>
          </>
        )
      })}
    </C.Container>
  );
};

export default PostDetails;