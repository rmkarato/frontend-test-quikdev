import * as React from "react";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../services/auth";

function Home() {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");

  const logout = () => {
    removeToken();
    window.location.reload();
  }

  const goToLoginPage = () => {
    navigate("/login");
  };

  return (
    <div>
      <h2>Bem-vindes a QuikDev</h2>
      { token === null ? 
        <button type="button" onClick={goToLoginPage}>Fazer Login</button> :
        <button type="button" onClick={logout}>Fazer Logout</button>
      }
      <div>
        <a href="/register">Náo tem cadastro? Cadastrar</a>
      </div>
    </div>
  );
}

export default Home;
