import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulação de autenticação (substitua por sua lógica real)
    if (email === 'teste@aulapwa.com' && senha === '1234567') {
      onLogin(email, senha);
      navigate('/home');
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="email">Endereço de e-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;