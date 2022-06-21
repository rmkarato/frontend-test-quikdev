import React, { useState } from "react";
  
const Login = () => {
	const [username, setUserName] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div>
			<h2>Login</h2>
			<form>
				<div>
					<label>Username:</label>
					<input 
						value={username}
						required 
						onChange={e => setUserName(e.target.value)}
					/>
				</div>	
				<div>
					<label>Senha:</label>
						<input 
						value={password} 
						type='password'
						required 
						onChange={e => setPassword(e.target.value)}
					/>
				</div>
				<div>
					<button>Entrar</button>
				</div>
				<a href='/register'>Náo tem cadastro? Cadastrar</a>
			</form>
		</div>
	);
};

export default Login;