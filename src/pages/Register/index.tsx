import * as React from "react";
import { useNavigate } from "react-router";

import { UseRegister } from "../../hooks";
import * as C from "./styles";

interface RegisterState {
	name: string;
	username: string;
  password: string;
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
		isLoading: false,
		error: "",
		isRegistered: false,
	};

const Register = () => {
	const navigate = useNavigate();
	const [state, dispatch] = React.useReducer(registerReducer, initialState);
  const { name, username, password, isLoading, error, isRegistered } = state;

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch({ type: "register" });

		try {
			await UseRegister({ name, username, password });
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
			<C.RegisterContainer>
				{isRegistered ? (
					<>
					{goToPostPage()}
					</>
				) : (
					<C.Form onSubmit={onSubmit}>
						{error && <C.Error>{error}</C.Error>}
						<p> Please Register!</p>
						<C.Input
              type="text"
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
