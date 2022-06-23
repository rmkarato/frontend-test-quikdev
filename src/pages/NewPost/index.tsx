import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";

const NewPost = () => {
  const [title, setTitle] = useState<string>();
  const [content, setContent] = useState<string>();
  const [method, setMethod] = useState<"post" | "put">("post");
  const { id, postId } = useParams();

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    const url = method === "put" ? `${baseUrl}/posts/${postId}` : `${baseUrl}/posts`;
    await axios[method](url, { userId: id, title, body: content }).then((response) => {
      console.log(response);
      alert(method === "put" ? "Post atualizado com sucesso." : "Post criado com sucesso")
    })
  };

  const getPost = async() => {
    await axios.get(`${baseUrl}/posts/${postId}`).then((response) => {
      setMethod("put");
      const { title, body } = response.data;
      setTitle(title);
      setContent(body);
    });
  };

  useEffect(() => {
    if(postId) { getPost(); }
  }, [postId]);


  return (
    <div>
      <h2>Novo Post</h2>
      <form>
        <input 
          type="text"
          placeholder="Titulo"
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <textarea 
          placeholder="Conteúdo"
          rows={4}
          cols={50}
          defaultValue={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <br />
        <button type="submit"onClick={handleSubmit}>{" "} Salvar {" "}</button>
      </form>
    </div>
  );
};

export default NewPost;