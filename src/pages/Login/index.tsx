import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  TextField,
  InputAdornment,
  IconButton,
} from "@material-ui/core";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { UseLogin } from "../../hooks";
import { isAuthenticated, setToken } from "../../services/auth";
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
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem("token")

    if(token === null) {
        navigate("/login")
    } else {
      navigate("/posts")
    }
  }, [navigate]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "login" });

    try {
      await UseLogin({ username, password });
      setToken();
      dispatch({ type: "success" });
      window.location.reload();
    } catch (error) {
      dispatch({ type: "error" });
    }
  };
  
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

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
            <TextField
              type="text"
              variant="outlined"
              required
              fullWidth
              label="username"
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

            <TextField
              name="password"
              onChange={(e) =>
                dispatch({
                  type: "field",
                  fieldName: "password",
                  payload: e.currentTarget.value,
                })}
              variant="outlined"
              required
              fullWidth
              label="password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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
