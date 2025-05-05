import axios from "axios";
import FooterCM from "./component/footer/footer";
import HeaderCM from "./component/header/header";
import { BodyContainer, BodyLoading } from "./styled";
import { useQuery } from "@tanstack/react-query";
import { RotateLoader } from "react-spinners";

function App() {
  // let liturgy: api;

  async function getLiturgy() {
    try {
      const response = await axios.get(
        "https://qr-code-base-crista-back-production.up.railway.app/admin/getbefore/"
      );

      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      alert("ALGO DEU ERRADO");
      console.error(error);
      return;
    }
  }

  const { data: liturgy } = useQuery<api>({
    queryKey: ["api-liturgy"],
    queryFn: getLiturgy,
  });

  return (
    <>
      <HeaderCM />
      {!liturgy ? (
        <BodyLoading>
          <RotateLoader color="#c13237" />
        </BodyLoading>
      ) : (
        <BodyContainer className="container">
          <section className="tema">
            <div className="tema-data">
              <span className="tema_name">TEMA:</span>
              <div className="tema_subtema">
                <span className="tema_txt">"{liturgy.tema}"</span>
                {liturgy.subtema && (
                  <span className="subtema_txt">"{liturgy.subtema}"</span>
                )}
              </div>
            </div>
            <span className="tema-versiculo">{liturgy.versiculo}</span>
          </section>
          <section style={{ backgroundColor: "white", color: "#4B4C4D" }}>
            <h2 style={{ padding: "0" }}>Liturgia:</h2>
          </section>
          <div className="liturgia">
            tem
            <section id="preludio">
              <h3>Prelúdio e oração inicial</h3>
            </section>
            <hr />
            <section id="louvores">
              <span className="title">LOUVORES INICIAIS</span>
              <ul>
                {Array.isArray(liturgy.louvoresIniciais) &&
                  liturgy.louvoresIniciais.map((e, index) => (
                    <li key={index}>
                      <span className="nome">nome: {e.nome}</span>
                      <span className="cantor">cantor: {e.cantor}</span>
                    </li>
                  ))}
              </ul>
            </section>
            <hr />
            <section id="momento_oracao">
              <h3>MOMENTO DE ORAÇÃO</h3>
            </section>
            <hr />
            <section id="sermao">
              <h3>SERMÃO</h3>
              <div className="palavra_data">
                <h3>Pregador: {liturgy.pregador}</h3>
                <div className="data_tema">
                  <span>Tema:</span>
                  <div className="data_tema_subtema">
                    <span className="tema"> {liturgy.tema}</span> <br />
                    {liturgy.subtema && (
                      <span className="subtema">{liturgy.subtema}</span>
                    )}
                  </div>
                </div>
              </div>
            </section>
            <hr />
            {Array.isArray(liturgy.louvorPosPalavra) &&
              liturgy.louvorPosPalavra && (
                <>
                  <section id="louvor_pos_palavra">
                    <h3>LOUVOR PÓS PALAVRA</h3>
                    <ul>
                      {liturgy.louvorPosPalavra.map((e, index) => (
                        <li key={index}>
                          <span className="nome">nome: {e.nome}</span>
                          <span className="cantor">cantor: {e.cantor}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                  <hr />
                </>
              )}
            {Array.isArray(liturgy.santaCeia) && liturgy.santaCeia && (
              <section id="santa-ceia">
                <span>Santa Ceia do Senhor</span>
              </section>
            )}
            {Array.isArray(liturgy.avisos) && liturgy.avisos && (
              <>
                <section id="avisos">
                  <h3>AVISOS</h3>
                  <ul>
                    {liturgy.avisos.map((e, index) => (
                      <li key={index}>
                        <span className="title">{e.titulo}:</span>
                        <p>{e.descrição}</p>
                      </li>
                    ))}
                  </ul>
                </section>
                <hr />
              </>
            )}
            <section id="avisos">
              <h3>ORAÇÃO FINAL</h3>
            </section>
            <hr />
          </div>
          <section
            id="tchau"
            style={{ backgroundColor: "#c13237", color: "white" }}
          >
            <h2>Te esperamos próximo domingo</h2>
            <span>Fique com Deus</span>
          </section>
        </BodyContainer>
      )}
      <FooterCM />
    </>
  );
}

export default App;
