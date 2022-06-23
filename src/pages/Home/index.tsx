import * as React from "react";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../services/auth";

import * as C from "./styles";

const Home = () => {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");

  const logout = () => {
    removeToken();
    window.location.reload();
  }

  const goToLoginPage = () => {
    navigate("/login");
  };

  const goToRegisterPage = () => {
    navigate("/register");
  };

  return (
    <C.Container>
      <C.Title>Oi! O que gostaria de saber?</C.Title>
      <C.Subtitle>Nós temos a resposta :) <br/> Confira aqui!</C.Subtitle>
      { token === null ? 
        <C.Button type="button" onClick={goToLoginPage}>Fazer Login</C.Button> :
        <C.Button type="button" onClick={logout}>Fazer Logout</C.Button>
      }
      <C.Text onClick={() => goToRegisterPage()} >Não tem cadastro? Cadastrar</C.Text>

    </C.Container>
  );
}

export default Home;
