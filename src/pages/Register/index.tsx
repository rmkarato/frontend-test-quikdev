import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
	const [password, setPassword] = useState('');
  
  return (
    <div>
      <h2>Cadastrar</h2>
      <form>
      <div>
					<label>Nome:</label>
					<input 
						value={name}
						required 
						onChange={e => setName(e.target.value)}
					/>
				</div>	
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
					<button>Cadastrar</button>
				</div>
        <a href='/login'>Já tem cadastro? Fazer login</a>
			</form>
    </div>
  );
};

export default Register;