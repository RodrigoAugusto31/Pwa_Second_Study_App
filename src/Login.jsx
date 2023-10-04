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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Centraliza verticalmente na tela inteira
      }}
    >
     
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '300px', // Largura máxima do conteúdo
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <label for="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Endereço de e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <label for="senha">Senha:</label>
          <input
            type="password"
            name="senha"
            placeholder="Senha"
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