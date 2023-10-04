import React from 'react';

function Home({ onLogout }) {
  return (
    <div>
      <h2>Bem-vindo à página Home</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Home;