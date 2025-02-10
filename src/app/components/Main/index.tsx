import { Main } from "./styles";
import Image from "next/image";

const especialidades = [
  { name: "Implantodontia", pathImg: "/images/especiaIcon1.png", alt: "Implantodontia" },
  {
    name: "Reabilitação Oral",
    pathImg: "/images/especiaIcon2.png",
    alt: "Reabilitação Oral",
  },
  { name: "Próteses", pathImg: "/images/especiaIcon3.png", alt: "Próteses" },
  { name: "Cirurgias", pathImg: "/images/especiaIcon4.png", alt: "Cirurgias" },
  { name: "Endodontia", pathImg: "/images/especiaIcon5.png", alt: "Endodontia" },
  { name: "Periodontia", pathImg: "/images/especiaIcon6.png", alt: "Periodontia" },
];

export function Especialidades() {
  return (
    <Main className="especialidades">
      <h2>Especialidades e Serviços</h2>
      <section className="servicos">
        <ul className="specialtys">
          {especialidades.map((item, index) => {
            return (
              <li key={index} className="specialtyitem" tabIndex={0}>
                <Image src={item.pathImg} alt={item.alt} width={50} height={50} />
                <h4>{item.name}</h4>
              </li>
            );
          })}
        </ul>

        <article className="card">
          <Image
            src={"/images/ImgArticle.png"}
            alt={"#"}
            id="imgCard"
            width={627}
            height={294}
          />
          <div id="textCard">
            {/* TODO: Fazer a feat de que quando clickar em 
            uma especialidade, Trocar as informaçoes do Card */}
            <h3 id="titleCard">Reabilitação Oral</h3>
            <p>
              A reabilitação oral é um conjunto de tratamentos odontológicos que visa
              restaurar a saúde, a função e a estética do sorriso. Esse procedimento é
              indicado para pacientes que apresentam perdas dentárias, desgastes severos,
              problemas na mordida ou dificuldades na fala e mastigação.
            </p>
          </div>
        </article>
      </section>
    </Main>
  );
}
