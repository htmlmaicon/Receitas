import React from 'react';
import './stylle.css'; // Importe o arquivo CSS

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Minha Aplicação</h1>
      
      <input 
        type="text" 
        placeholder="Pesquisar..." 
        className="search-input"
      />

      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/formulario" className="nav-link">Formulário</a>
          </li>
          <li className="nav-item">
            <a href="/mais" className="nav-link">Mais</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
