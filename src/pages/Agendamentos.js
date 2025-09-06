import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const Agendamentos = () => {
    const [agendamento, setAgendamento] = useState({
        data: "",
        hora: "",
        medico: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) =>{
        setAgendamento({...agendamento, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const response = await fetch("http://localhost:8080/agendamentos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(agendamento),
      });

      if (response.ok) {
        alert("Agendamento realizado com sucesso!");
      } else {
        alert("Erro ao agendar consulta.");
      }
    } catch (error) {}
    navigate("/user-menu"); // Redireciona para o menu do usuário
  };

  return (
    <div className="agendamentos-container">
      <h2>Agendar Consulta</h2>
      <form onSubmit={handleSubmit}>
        <label>Data:</label>
        <input
          type="date"
          name="data"
          value={agendamento.data}
          onChange={handleChange}
          required
        />

        <label>Horário:</label>
        <input
          type="time"
          name="hora"
          value={agendamento.hora}
          onChange={handleChange}
          required
        />

        <label>Médico:</label>
        <select
          name="medico"
          value={agendamento.medico}
          onChange={handleChange}
          required
        >
          <option value="">Selecione um médico</option>
          <option value="Dra. Selton M">Dr. Selton M.</option>
          <option value="Dra. Fernanda T">Dra. Fernanda T.</option>
          <option value="Dra. Julia S">Dra. Julia S.</option>
        </select>

        <button type="submit">Agendar</button>
      </form>
    </div>
  );
};

export default Agendamentos;
