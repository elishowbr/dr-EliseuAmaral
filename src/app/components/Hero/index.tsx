import { Hero } from "./styles";
import Image from "next/image"
import dentist from "@/../public/icons/dentist.svg";
import heart from "@/../public/icons/heart.svg";
import safety from "@/../public/icons/safety.svg";


export function HeroSection() {
  return (
    <Hero>

        <h2>Agende sua consulta hoje mesmo e transforme seu sorriso!</h2>

        <ul className="hero-items">

          <li className="hero-item">
            <Image src={dentist} width={75} height={75} alt="Logo" id="logoIcon" />

            <p>Cuidado individualizado com foco na confiança e no conforto do paciente.</p>
          </li>

          <li className="hero-item">
          <Image src={heart} width={75} height={75} alt="Logo" id="logoIcon" />
            <p>Equipamentos de ponta que garantem precisão, conforto e segurança no tratamento.</p>
          </li>

          <li className="hero-item">
          <Image src={safety} width={75} height={75} alt="Logo" id="logoIcon" />
            <p>Padrões de biossegurança para proteger sua saúde.</p>
          </li>

        </ul>

    </Hero>
  );
}
