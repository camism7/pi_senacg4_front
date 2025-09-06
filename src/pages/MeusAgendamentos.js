import React, { useState, useEffect } from "react";

const MeusAgendamentos = () => {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    const fetchAgendamentos = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await fetch("http://localhost:8080/agendamentos", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.ok) {
          const data = await response.json();
          setAgendamentos(data);
        } else {
        }
      } catch (error) {}
    };

    fetchAgendamentos();
  }, []);

  return (
    <div className="meus-agendamentos-container">
      <h2>Meus Agendamentos</h2>
      {agendamentos.length > 0 ? (
        <ul>
          {agendamentos.map((appt) => (
            <li key={appt._id}>
              {appt.data} às {appt.hora} com Dr(a). {appt.medico}
            </li>
          ))}
        </ul>
      ) : (
        <p>Você não tem agendamentos no momento.</p>
      )}
    </div>
  );
};

export default MeusAgendamentos;
