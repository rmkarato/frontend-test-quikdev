import React from "react";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate('/login');
  };

  return (
    <div>
      <h2>Bem-vindes a QuikDev</h2>
      <button onClick={goToLoginPage}>Fazer Login</button>
      <div><a href='/register'>Náo tem cadastro? Cadastrar</a></div>
    </div>
  );
};

export default Home;