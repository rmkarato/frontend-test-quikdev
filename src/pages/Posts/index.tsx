import React, { useEffect, useState } from "react";
import axios from "axios";
import * as C from "./styles";
import { useNavigate } from "react-router";

const baseUrl = "https://jsonplaceholder.typicode.com";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    getPostList();
  }, []);

  const getPostList = async() => {
    try {
      const response = await axios.get(`${baseUrl}/posts`);
      setPosts(response.data);
    } catch(error) {
      console.log(error);
    }
  }

  const goToPostDetails = (id: number) => {
    navigate(`/posts/${id}`);
  };

  return (
    <C.Container>
      <h2>Posts</h2>
      <div>{posts.length === 0 && <p>Loading...</p>}</div>
      <C.PostContainer>
        {posts && posts.map((post) => {
          return (
            <C.CardContainer>
              <h3>{post.title}</h3>
              <C.Text>{post.body}</C.Text>
              <C.Button type="button" onClick={() => goToPostDetails(post.id)}>Show more</C.Button>
            </C.CardContainer>
          )
        })}
      </C.PostContainer>
    </C.Container>
  );
};

export default Posts;