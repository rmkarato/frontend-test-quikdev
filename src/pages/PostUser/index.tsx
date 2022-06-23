import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPost } from "../../interfaces/post";
import { getPostUser } from "../../services/post";

import * as C from "./styles";

const baseUrl = "https://jsonplaceholder.typicode.com";

const PostUser = () => {
  const [postsUser, setPostsUser] = useState<IPost[]>([]);
  const { id } = useParams();

  useEffect(() => {
    if(id) { getPostUser(setPostsUser, +id) }
  }, [id]);

  const handleDelete = async(postId: number) => {
    if(window.confirm("Tem certeza que deseja deletar este post?")) {
      await axios.delete(`${baseUrl}/posts/${postId}`)
      try {
        setPostsUser(postsUser.filter((post) => { return post.id !== postId}))
      } catch(error) {
        alert("Não foi possível apagar este post!")
      };
    };
  };

  return (
    <C.Container>
      <C.Title>Posts do Usuário</C.Title>
      <C.TextLink onClick={() => window.history.back()}>Voltar</C.TextLink>
      <C.Button><C.StyledLink to={`new`}>Criar Post</C.StyledLink></C.Button>
      <C.Ul>
        {postsUser && postsUser.map((post) => (
           <C.CardContainer>
              <C.TextTitle><b>{post.title}</b></C.TextTitle>
              <C.ButtonEdit>
                <C.Button><C.StyledLink to={`new/${post.id}`}>Editar Post</C.StyledLink></C.Button>
                <C.Button onClick={() => handleDelete(+post.id)}>Excluir Post</C.Button>
              </C.ButtonEdit>
          </C.CardContainer>
        ))}
      </C.Ul>
    </C.Container>
  )
}

export default PostUser;