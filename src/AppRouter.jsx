import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Login from './Login';
import Home from './Home';

function AppRouter() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = (email, senha) => {
    // Simulação de autenticação (substitua por sua lógica real)
    if (email === 'teste@aulapwa.com' && senha === '1234567') {
      setAuthenticated(true);
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/home"
          element={authenticated ? <Home onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default AppRouter;