import * as React from "react";
import { useNavigate } from "react-router";

import { UseLogin } from "../../hooks";
import * as C from "./styles";

interface LoginState {
  username: string;
  password: string;
  isLoading: boolean;
  error: string;
  isLoggedIn: boolean;
};

type LoginAction =
  | { type: "login" | "success" | "error" | "logout" }
  | { type: "field"; fieldName: string; payload: string };

const loginReducer = (state: LoginState, action: LoginAction): LoginState => {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    case "login": {
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    }
    case "success": {
      return {
        ...state,
        error: "",
        isLoading: false,
        isLoggedIn: true,
      };
    }
    case "error": {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        username: "",
        password: "",
        error: "Username ou senha incorretos!",
      };
    }
    case "logout": {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
};

const initialState: LoginState = {
	username: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
};

const Login = () => {
	const navigate = useNavigate();
  const [state, dispatch] = React.useReducer(loginReducer, initialState);
  const { username, password, isLoading, error, isLoggedIn } = state;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "login" });

    try {
      await UseLogin({ username, password });
      dispatch({ type: "success" });
    } catch (error) {
      dispatch({ type: "error" });
    }
  };

	const goToPostPage = () => {
		navigate("/posts");
	};

  return (
    <C.Container>
      <C.LoginContainer>
        {isLoggedIn ? (<>{goToPostPage()}</>
				 ) : (
          <C.Form onSubmit={onSubmit}>
            {error && <C.Error>{error}</C.Error>}
            <p> Please Login!</p>
            <C.Input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  fieldName: "username",
                  payload: e.currentTarget.value,
                })
              }
            />
            <C.Input
              type="password"
              placeholder="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  fieldName: "password",
                  payload: e.currentTarget.value,
                })
              }
            />
            <C.Button type="submit" disabled={isLoading}>
              {isLoading ? "Loggin in....." : "Login"}
            </C.Button>
          </C.Form>
        )}
      </C.LoginContainer>
    </C.Container>
  );
}

export default Login;
