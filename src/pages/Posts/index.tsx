import React, { useEffect, useState } from "react";
import axios from "axios";
import * as C from "./styles";
import { useNavigate } from "react-router";

import DeleteIcon from '@material-ui/icons/Delete';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import EditIcon from '@material-ui/icons/Edit';
import { getPostList } from "../../services/post";
import { IPost } from "../../interfaces/post";

const baseUrl = "https://jsonplaceholder.typicode.com";

const Posts = () => {
  const navigate = useNavigate();
  
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    getPostList(setPosts);

    const token = window.localStorage.getItem("token");

    if(token === null) {
      navigate("/login")
      alert("Voce precisa estar logado para acessar esta área.")
    } else {
      navigate("/posts")
    }
  }, [navigate]);

  const goToPostDetails = (id: number) => {
    navigate(`/posts/${id}`);
  };

  const goToEditPost = (id: any, postId: any) => {
    navigate(`/users/${id}/posts/new/${postId}`);
  }

  const deletePost = async(id: any) => {
    if(window.confirm("Tem certeza que deseja deletar este post?")) {
      await axios.delete(`${baseUrl}/posts/${id}`)
      try {
        setPosts(posts.filter((item) => { return item.id !== id}))
      } catch(error) {
        alert("Não foi possível apagar este post!")
      }
    } 
  }

  return (
    <C.Container>
      <C.Title>Posts</C.Title>
      <div>{posts.length === 0 && <p>Carregando...</p>}</div>
      <C.PostContainer>
        {posts && posts.map((post) => {
          return (
            <C.CardContainer>
              <C.PostTitle>{post.title}</C.PostTitle>
              <C.Text>{post.body}</C.Text>
              <C.TextLink onClick={() => goToPostDetails(post.id)}>Ver mais</C.TextLink>
              <C.EditContainer>
                <DeleteIcon style={{ marginRight: 10, marginLeft: 10, cursor: "pointer" }} onClick={() => deletePost(post.id)} />
                <ChatBubbleOutlineIcon style={{ marginRight: 10, cursor: "pointer" }} onClick={() => goToPostDetails(post.id)} />
                <EditIcon style={{ marginRight: 10, cursor: "pointer" }} onClick={() => goToEditPost(post.userId, post.id)}/>
              </C.EditContainer>
            </C.CardContainer>
          )
        })}
      </C.PostContainer>
    </C.Container>
  );
};

export default Posts;