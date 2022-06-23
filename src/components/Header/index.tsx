import * as React from "react";
import { Link } from 'react-router-dom';
import * as C from "./styles";

const Header = () => {
  return (
    <C.Container>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
         <Link to='/login'>Login</Link> 
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