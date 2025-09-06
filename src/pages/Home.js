import React from "react";
import "../styles/styles.css";
import imagem1 from "../images/psicologia imagem.png";

function Home({ isLogged }) {
  return (
    <main>
      <section className="home-container">
        <div className="home-content">
          <div className="home-text">
            {isLogged && <h2>Bem-vindo(a)!</h2>}
            <h1>Cuidando da mente, transformando vidas.</h1>
            <p>
              O atendimento psicológico é fundamental para promover a saúde
              mental e o bem-estar emocional. Ele oferece um espaço seguro e
              acolhedor onde as pessoas podem expressar seus sentimentos,
              enfrentar desafios e desenvolver estratégias para lidar com o
              estresse, ansiedade e depressão. Além disso, a terapia ajuda a
              melhorar a autoestima e a autoconfiança, permitindo que os
              indivíduos alcancem uma melhor qualidade de vida.
            </p>
            <p>
              Além dos benefícios individuais, o atendimento psicológico também
              tem um impacto positivo na sociedade como um todo. Ao ajudar as
              pessoas a resolverem seus problemas emocionais e comportamentais,
              a terapia contribui para a redução de conflitos interpessoais e
              melhora a comunicação e os relacionamentos. Isso resulta em
              comunidades mais saudáveis e harmoniosas, onde as pessoas são mais
              capazes de apoiar umas às outras e de enfrentar os desafios
              coletivos de maneira mais eficaz.
            </p>
          </div>
          <img
            src={imagem1}
            alt="Imagem sobre psicologia"
            className="home-image"
          />
        </div>

        <div className="home-buttons">
          <button>Central de Segurança</button>
          <button>Central de Privacidade</button>
          <button>Central dos Pais</button>
          <button>Central de Transparência</button>
          <button>Central de Notícias</button>
          <button>Central de Políticas</button>
        </div>
      </section>
    </main>
  );
}

export default Home;
