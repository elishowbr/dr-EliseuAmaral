import Image from "next/image";
import { AboutMe } from "./styles";

export function About() {
  return (
    <AboutMe id="sobre">
      <Image
        id="imgProfile"
        src={"/images/imgProfileExample.jpg"}
        alt="Imagem do profissional odontologico"
        width={400}
        height={380}
      ></Image>

      <div id="containerAbout">
        <h2 id="aboutTitle">Sobre mim</h2>
        <p>
          Luci Ipsumis simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industrys standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen
          book. Saudades da Luci but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.lelectronic Luci remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum. luci
        </p>
      </div>
    </AboutMe>
  );
}
