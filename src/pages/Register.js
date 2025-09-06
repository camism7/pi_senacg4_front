import "../styles/styles.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import imagem2 from "../images/undraw_medicine_hqqg.png";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const message = await response.text();
    alert(message);
    navigate("/Login");
  };

  return (
    <section className="body-cadastro">
      <div className="container-cadastro">
        <div className="form-image-cadastro">
          <img alt="imagem medicine" src={imagem2} />
        </div>
        <div className="form-cadastro">
          <form onSubmit={handleSubmit}>
            <div className="form-header">
              <div className="title-cadastro">
                <h1>Formulário de Cadastro</h1>
              </div>
            </div>

            <div className="input-group-cadastro">
              <div className="input-box-cadastro">
                <label for="firstname">Primeiro Nome</label>
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome"
                  onChange={handleChange}
                  required
                />{" "}
              </div>

              <div className="input-box-cadastro">
                <label for="lastname">Sobrenome</label>
                <input
                  type="text"
                  name="sobrenome"
                  placeholder="Sobrenome"
                  onChange={handleChange}
                  required
                />{" "}
              </div>

              <div className="input-box-cadastro">
                <label for="email">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />{" "}
              </div>

              <div className="input-box-cadastro">
                <label for="password">Senha</label>
                <input
                  type="password"
                  name="senha"
                  placeholder="Senha"
                  onChange={handleChange}
                  required
                />{" "}
              </div>
            </div>

            <div className="continue-button-cadastro">
              <button type="submit" className="btn btn-light">
                Confirmar
              </button>{" "}
              <div className="voltar">
                <Link to="/">
                  {" "}
                  <button type="button" className="btn btn-light">
                    Voltar
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;

