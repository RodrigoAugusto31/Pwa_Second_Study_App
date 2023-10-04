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
        fontFamily: 'Roboto, sans-serif', // Define a fonte para todos os elementos
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
        <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Endereço de e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ marginBottom: '10px' }} 
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <label htmlFor="senha" style={{ fontWeight: 'bold' }}>Senha:</label>
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            style={{ marginBottom: '15px' }} 
          />
        </div>
        <button
          type="button"
          onClick={handleLogin}
          style={{
            width: '60%', // Define a largura do botão igual à dos campos de entrada
            marginTop: '10px',
            backgroundColor: '#A020F0', // Cor roxa
            color: '#fff',
            border: 'none',
            borderRadius: '25px', // Borda arredondada
            padding: '10px',
            cursor: 'pointer',
            fontFamily: 'Roboto, sans-serif', // Define a fonte para todos os elementos
          }}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;