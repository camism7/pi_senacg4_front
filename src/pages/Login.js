import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        onLoginSuccess();
        navigate("/user-menu");
      } else {
        setError(data.message || "Erro ao fazer login");
      }
    } catch (error) {
      setError("Erro na conexão com o servidor");
    }
  };

  return (
    <section className="body-cadastro">
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="container-cadastro">
        <div className="form-cadastro">
          <form onSubmit={handleSubmit}>
            <div className="form-header">
              <div className="title-cadastro">
                <h1>LOGIN</h1>
              </div>
            </div>

            <div className="input-group-cadastro">
              <div className="input-box-cadastro">
                <label for="firstname">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-box-cadastro">
                <label for="firstname">Senha</label>
                <input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="continue-button-cadastro">
              <button type="submit" className="btn btn-light">
                Entrar
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
}

export default Login;