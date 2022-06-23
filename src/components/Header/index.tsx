import * as React from "react";
import { Link } from 'react-router-dom';
import { removeToken } from "../../services/auth";
import * as C from "./styles";

const Header = () => {
  const token = window.localStorage.getItem("token");

  const logout = () => {
    removeToken();
    window.location.reload();
  }

  return (
    <C.Container>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
         {token === null ? <Link to='/login'>Login</Link> : <Link onClick={() => logout()} to='/'>Logout</Link>}
        </li>
        <li>
          <Link to='/register'>Cadastrar</Link>
        </li>
        <li>
         <Link to='/users'>Users</Link> 
        </li>
        <li>
          <Link to='/posts'>Posts</Link>
        </li>
      </ul>
    </C.Container>
  )
}

export default Header;