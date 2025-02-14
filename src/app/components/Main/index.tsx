import { useState } from "react";
import { Main } from "./styles";
import Image from "next/image";

const especialidades = [
  {
    name: "Implantodontia",
    pathIcon: "/images/especiaIcon1.png",
    alt: "Implantodontia",
    descricao:
      "A implantodontia é a especialidade responsável pela reabilitação de pacientes que perderam um ou mais dentes, utilizando implantes dentários. O implante é um pequeno parafuso de titânio fixado no osso da mandíbula ou maxila, substituindo a raiz do dente perdido. Sobre ele, é colocada uma coroa protética que imita um dente natural.",
  },
  {
    name: "Reabilitação Oral",
    pathIcon: "/images/especiaIcon2.png",
    alt: "Reabilitação Oral",
    descricao:
      "A reabilitação oral é um conjunto de procedimentos odontológicos que restauram a função, a saúde e a estética do sorriso. É indicada para pacientes que apresentam perdas dentárias, desgastes severos, problemas na mordida ou dificuldades na fala e mastigação.",
  },
  {
    name: "Próteses",
    pathIcon: "/images/especiaIcon3.png",
    alt: "Próteses",
    descricao:
      "A especialidade de próteses dentárias foca na substituição de dentes perdidos, devolvendo estética e funcionalidade ao sorriso. Existem diferentes tipos de próteses, cada uma indicada para um caso específico.",
  },
  {
    name: "Cirurgias",
    pathIcon: "/images/especiaIcon4.png",
    alt: "Cirurgias",
    descricao:
      "A cirurgia odontológica abrange diversos procedimentos que exigem intervenções mais complexas para a saúde bucal. Essas cirurgias podem ser corretivas, reparadoras ou preventivas.",
  },
  {
    name: "Endodontia",
    pathIcon: "/images/especiaIcon5.png",
    alt: "Endodontia",
    descricao:
      "A endodontia é a área da odontologia responsável pelo tratamento da polpa dentária (nervo do dente). O procedimento mais comum dessa especialidade é o tratamento de canal, indicado quando a polpa dentária está infeccionada ou inflamada devido a cáries profundas, traumas ou fraturas.",
  },
  {
    name: "Periodontia",
    pathIcon: "/images/especiaIcon6.png",
    alt: "Periodontia",
    descricao:
      "A periodontia é a especialidade que trata das doenças gengivais e do suporte ósseo dos dentes. Doenças periodontais, como gengivite e periodontite, podem levar à perda dentária se não forem tratadas adequadamente.",
  },
];

export function Especialidades() {
  const [select, setSelect] = useState(especialidades[0]);

  return (
    <Main>
      <h2>Especialidades e Serviços</h2>
      <section className="servicos">

        <ul className="specialtys">
          {especialidades.map((item, index) => {
            console.log(index)
            return (
              <li
                key={index}
                className="specialtyitem"
                tabIndex={0}
                onClick={() => setSelect(item)}
              >
                <Image src={item.pathIcon} alt={item.alt} width={50} height={50} />
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
            <h3 id="titleCard">{select.name}</h3>
            <p>{select.descricao}</p>
          </div>
        </article>
      </section>
    </Main>
  );
}
