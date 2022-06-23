import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../interfaces/user"
import { getUsers } from "../../services/user";

import AccountCircleIcon from '@material-ui/icons//AccountCircle';

import * as C from "./styles";

const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getUsers(setUsers);

    const token = window.localStorage.getItem("token")

    if(token === null) {
      navigate("/login")
      alert("Voce precisa estar logado para acessar esta área.")
    } else {
      navigate("/users")
    }
  }, [navigate]);

  return (
    <C.Container>
      <C.Title>Usuários</C.Title>
      <div>{users.length === 0 && <p>Carregando...</p>}</div>
      <C.Ul>
        {users && users.map((user) => (
          <C.CardContainer>
            <C.ProfileContainer>
              <AccountCircleIcon style={{ fontSize: 60 }} />
              <C.InfoContainer>
                <C.Text><b>{user.name}</b></C.Text>
                <C.Text>{`@${user.username}`.toLowerCase()}</C.Text>
                <C.Text>{`${user.email}`.toLowerCase()}</C.Text>
              </C.InfoContainer>
            </C.ProfileContainer>
            <C.StyledLink to={`${user.id}/posts`}>Ver Posts do Usuário</C.StyledLink>
          </C.CardContainer>
        ))}
      </C.Ul>
    </C.Container>
  )
}

export default Users;