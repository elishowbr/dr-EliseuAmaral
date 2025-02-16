import Image from "next/image";
import { Hero } from "./styles";
import healthIcon from "@/../public/healthCheck.svg";
import toolsIcon from "@/../public/toolsDentist.svg";
import handsIcon from "@/../public/CleanerHands.svg";

export function HeroSection() {
  return (
    <Hero>
        
        <h2>Agende sua consulta hoje mesmo e transforme seu sorriso!</h2>

        <ul className="hero-items">

          <li className="hero-item">

            <div id="circle">
              <Image src={healthIcon} alt="#" width={60} height={60} />
            </div>

            <p>
              Cuidado individualizado com foco na confiança e no conforto do paciente.
            </p>
          </li>

          <li className="hero-item">
            <div id="circle">
              <Image src={toolsIcon} alt="#" width={60} height={60} />
            </div>
            <p>
              Equipamentos de ponta que garantem precisão, conforto e segurança no tratamento.
            </p>
          </li>

          <li className="hero-item">
            <div id="circle">
              <Image src={handsIcon} alt="#" width={60} height={60} />
            </div>
            <p>Padrões de biossegurança para proteger sua saúde.</p>
          </li>

        </ul>
        
    </Hero>
  );
}
