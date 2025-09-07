import React from "react";
import { Link } from "react-router-dom";

function UserMenu() {
  return (
    <div className="container">
      <h2>Bem-vindo ao seu Menu</h2>
      <p>Escolha uma opção abaixo:</p>
      <ul>
        <li>
          <Link to="/agendamentos">Agendar Consulta</Link>
        </li>
        <li>
          <Link to="/meus-agendamentos">Meus Agendamentos</Link>
        </li>
      </ul>
    </div>
  );
}

export default UserMenu;