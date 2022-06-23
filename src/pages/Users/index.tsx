import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IUser } from "../../interfaces/user"
import { getUsers } from "../../services/user";

const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getUsers(setUsers);

    const token = window.localStorage.getItem("token")

    if(token === null) {
      navigate("/login")
    } else {
      navigate("/users")
    }
  }, [navigate]);

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {users && users.map((user) => (
          <li key={user.id}>
            <Link to={`${user.id}/posts`}>{user.name}</Link>
            <br />
            {user.username} - {user.email}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users;