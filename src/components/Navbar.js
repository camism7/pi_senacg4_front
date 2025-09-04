import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";
import logo from "../images/imagem logo psicologia.png";

function Navbar({ isLoggedIn, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-container">
      <img src={logo} alt="logo" className="navbar-logo" />

      {/* Ícone de menu hamburguer para mobile */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <nav className={menuOpen ? "navbar-menu open" : "navbar-menu"}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        {isLoggedIn && (
          <>
            <Link to="/agendamentos" onClick={() => setMenuOpen(false)}>
              Agendar Consultas
            </Link>
            <Link to="/meus-agendamentos" onClick={() => setMenuOpen(false)}>
              Meus Agendamentos
            </Link>
          </>
        )}
        <Link to="#" onClick={() => setMenuOpen(false)}>
          Teleconsultas
        </Link>
        <Link to="#" onClick={() => setMenuOpen(false)}>
          Rede Credenciada
        </Link>
        <Link to="#" onClick={() => setMenuOpen(false)}>
          Fale Conosco
        </Link>

        {isLoggedIn ? (
          <>
            <Link to="/user-menu" onClick={() => setMenuOpen(false)}>
              Minha Conta
            </Link>
            <button type="button" className="btn btn-danger" onClick={onLogout}>
              Sair
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn-login"
              onClick={() => setMenuOpen(false)}
            >
              Entrar
            </Link>
            <Link
              to="/register"
              className="btn-register"
              onClick={() => setMenuOpen(false)}
            >
              Cadastrar
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Navbar;