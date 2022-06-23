import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getComments, getPostDetails } from "../../services/post";
import { getUserDetails } from "../../services/user";

import AccountCircleIcon from '@material-ui/icons//AccountCircle';
import * as C from "./styles";
import { IUser } from "../../interfaces/user";
import { IComment, IPostDetails } from "../../interfaces/post";

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
  }, [id, postDetails?.userId]);

  const goToPosts = () => {
    navigate("/posts");
  };

  const goToComments = () => {
    getComments(setComments, id);
    setShowComments(!showComments);
  }

  return (
    <C.Container>
      <C.Title>Detalhes</C.Title>
      <C.TextLink onClick={() => goToPosts()}>Voltar Para Posts</C.TextLink>
      <C.CardContainer>
      {user &&
        <C.ProfileContainer>
          <AccountCircleIcon style={{ fontSize: 80 }} />
          <C.InfoContainer>
            <C.Text><b>{user.name}</b></C.Text>
            <C.Text>{`@${user.username}`.toLowerCase()}</C.Text>
          </C.InfoContainer>
        </C.ProfileContainer>
      }
      {postDetails &&
        <>
        <h3>{postDetails.title}</h3>
        <p>{postDetails.body}</p>
        </>
      }
      <C.TextLink onClick={() => goToComments()}>{!showComments ? <>Ver Comentários</> : <>Ocultar Comentários</>}</C.TextLink>
      {showComments && comments.map((item) => {
        return (
          <C.CommentsContainer>
          <C.TextCommentEmail> <AccountCircleIcon style={{ marginRight: 5 }} /><b>{`${item.email}`.toLowerCase()}</b></C.TextCommentEmail>
          <C.TextComment><b>{item.name}</b></C.TextComment>
          <C.TextComment>{item.body}</C.TextComment>
          </C.CommentsContainer>
        )
      })}
      </C.CardContainer>
    </C.Container>
  );
};

export default PostDetails;