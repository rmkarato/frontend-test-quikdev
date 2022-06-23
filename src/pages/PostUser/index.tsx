import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IPost } from "../../interfaces/post";
import { getPostUser } from "../../services/post";

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
    <div>
      <button onClick={() => window.history.back()}>Voltar</button>
      <h2>Lista de Post de Usuários</h2>
      <Link to={`new`}>Criar Post</Link>
      <ul>
        {postsUser && postsUser.map((post) => (
          <li key={post.id}>
            <Link to={`new/${post.id}`}><b>{post.title}</b></Link>
            <button onClick={() => handleDelete(+post.id)}><b>Excluir</b></button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostUser;