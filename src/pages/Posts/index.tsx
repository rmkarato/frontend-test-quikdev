import React, { useEffect, useState } from "react";
import axios from "axios";
import * as C from "./styles";
import { useNavigate } from "react-router";
import { removeToken } from "../../services/auth";

import DeleteIcon from '@material-ui/icons/Delete';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { getPostList, updatePost } from "../../services/post";
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
    } else {
      navigate("/posts")
    }
  }, [navigate]);

  const goToPostDetails = (id: number) => {
    navigate(`/posts/${id}`);
  };

  const logout = () => {
    removeToken();
    navigate("/");
    window.location.reload();
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
      <h2>Posts</h2>
      <C.Button type="button" onClick={() => logout()}>Logout</C.Button>
      <div>{posts.length === 0 && <p>Carregando...</p>}</div>
      <C.PostContainer>
        {posts && posts.map((post) => {
          return (
            <C.CardContainer>
              <h3>{post.title}</h3>
              <C.Text>{post.body}</C.Text>
              <C.Button type="button" onClick={() => goToPostDetails(post.id)}>Ver mais</C.Button>
              <div onClick={() => deletePost(post.id)} ><DeleteIcon /></div>
              <div onClick={() => goToPostDetails(post.id)}> <ChatBubbleOutlineIcon /></div>
              <C.Button type="button" onClick={() => updatePost(setPosts, post.id)}>Update Post</C.Button>
            </C.CardContainer>
          )
        })}
      </C.PostContainer>
    </C.Container>
  );
};

export default Posts;