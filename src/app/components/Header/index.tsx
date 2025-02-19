import { Head, WhatsappButton } from "./styles";
import Image from "next/image";
import Logo from "@/../public/LogoHead.png";

export function Header() {
  return (
    <Head id="inicio"> 
      <div className="logo">
        <Image src={Logo} alt="Logo" id="logoIcon" />
        <div className="logoInfo">
          <p>Dr.</p>
          <h1>Eliseu Amaral</h1>
          <p>CRO-CE 2354</p>
        </div>
      </div>

      <div className="headerInfo">
        <nav>
          <a href="#especialidades">Especialidades</a>
          <a href="#sobre">Sobre</a>
          <a href="#contact">Contato</a>
        </nav>

        <WhatsappButton
          id="wppContact"
          target="_blank"
          $text={'Fale conosco'}
          href="https://wa.me/85988994048?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação!"
        ></WhatsappButton>
      </div>
    </Head>
  );
}
