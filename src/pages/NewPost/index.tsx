import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { TextField } from "@material-ui/core";

import * as C from "./styles";

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

      alert(method === "put" ? "Post atualizado com sucesso." : "Post criado com sucesso");
      window.history.back();
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
    <C.Container>
      <C.Title>{method === "put" ? <>Editar Post</> : <>Novo Post</>}</C.Title>
      <C.TextLink onClick={() => window.history.back()}>Voltar</C.TextLink>
      <C.Form>
        <TextField 
          style={{ marginBottom: 8 }}
          type="text"
          variant="outlined"
          required
          fullWidth
          label={method === "put" ? "" : "título"}
          value={title}
          placeholder="título"
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField 
          style={{ marginBottom: 8 }}
          type="text"
          variant="outlined"
          placeholder="conteúdo"
          label={method === "put" ? "" : "conteúdo"}
          multiline
          rows={4}
          required
          fullWidth
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <C.Button onClick={handleSubmit}>Salvar</C.Button>
      </C.Form>
    </C.Container>
  );
};

export default NewPost;