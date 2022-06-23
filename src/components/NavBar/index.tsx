import * as React from "react";
import { removeToken } from "../../services/auth";
import * as C from "./styles";

const LogoImg = require("../../assets/imgs/logo.png");

const NavBar = () => {
  const token = window.localStorage.getItem("token");

  const logout = () => {
    removeToken();
    window.location.reload();
  }

  return (
      <C.Ul>
        <C.Li>
          <C.Image src={LogoImg} alt="Logo" />
        </C.Li>
        <C.LiContainer>
          <C.Li>
            <C.StyledLink to='/'>Home</C.StyledLink>
          </C.Li>
          <C.Li>
          {token === null ? <C.StyledLink to='/login'>Login</C.StyledLink> : <C.StyledLink onClick={() => logout()} to='/'>Logout</C.StyledLink>}
          </C.Li>
          <C.Li>
            <C.StyledLink to='/register'>Cadastrar</C.StyledLink>
          </C.Li>
          <C.Li>
            <C.StyledLink to='/posts'>Posts</C.StyledLink>
          </C.Li>
          <C.Li>
          <C.StyledLink to='/users'>Usuários</C.StyledLink> 
          </C.Li>
        </C.LiContainer>
      </C.Ul>

  )
}

export default NavBar;