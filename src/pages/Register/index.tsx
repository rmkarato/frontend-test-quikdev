import * as React from "react";
import { useNavigate } from "react-router";
import {
  TextField,
  InputAdornment,
  IconButton,
} from "@material-ui/core";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { UseRegister } from "../../hooks";
import { setToken } from "../../services/auth";
import * as C from "./styles";
import { useState } from "react";

interface RegisterState {
	name: string;
	username: string;
  password: string;
	confirmPassword: string;
  isLoading: boolean;
  error: string;
  isRegistered: boolean;
};

type RegisterAction =
  | { type: "register" | "success" | "error" | "logout" }
	| { type: "field"; fieldName: string; payload: string };
	
	const registerReducer = (state: RegisterState, action: RegisterAction): RegisterState => {
		switch (action.type) {
			case "field": {
				return {
					...state,
					[action.fieldName]: action.payload,
				};
			}
			case "register": {
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
					isRegistered: true,
				};
			}
			case "error": {
				return {
					...state,
					isLoading: false,
					isRegistered: false,
					name: "",
					username: "",
					password: "",
					confirmPassword: "",
					error: "Náo foi possível registrar!",
				};
			}
			case "logout": {
				return {
					...state,
					isRegistered: false,
				};
			}
			default:
				return state;
		}
	};

	const initialState: RegisterState = {
		name: "",
		username: "",
		password: "",
		confirmPassword: "",
		isLoading: false,
		error: "",
		isRegistered: false,
	};

const Register = () => {
	const navigate = useNavigate();
	const [state, dispatch] = React.useReducer(registerReducer, initialState);
  const { name, username, password, confirmPassword, isLoading, error, isRegistered } = state;
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch({ type: "register" });

		try {
			if (password === confirmPassword) {
				await UseRegister({ name, username, password, confirmPassword });
				setToken();
				dispatch({ type: "success" });
			} else {
				alert("Senhas nao conferem");
				dispatch({ type: "error" });
			}
			
		} catch (error) {
			dispatch({ type: "error" });
		}
	};

	const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

	const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  }

	const goToPostPage = () => {
		navigate("/posts");
	};

  return (
    <C.Container>
			<C.RegisterContainer>
				{isRegistered ? (
					<>
					{goToPostPage()}
					</>
				) : (
					<C.Form onSubmit={onSubmit}>
						{error && <C.Error>{error}</C.Error>}
						<p> Please Register!</p>
						<TextField
              type="text"
              variant="outlined"
              required
              fullWidth
              label="name"
              placeholder="name"
              value={name}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  fieldName: "name",
                  payload: e.currentTarget.value,
                })
              }
            />

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

						<TextField
              name="confirm password"
              onChange={(e) =>
                dispatch({
                  type: "field",
                  fieldName: "confirmPassword",
                  payload: e.currentTarget.value,
                })}
              variant="outlined"
              required
              fullWidth
              label="confirm password"
              type={showConfirmPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowConfirmPassword}
                    >
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <C.Button type="submit" className="submit" disabled={isLoading}>
              {isLoading ? "Registering....." : "Register"}
            </C.Button>
					</C.Form>
				)}
			</C.RegisterContainer>
    </C.Container>
  );
}

export default Register;
