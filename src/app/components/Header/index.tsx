import { Head } from "./styles";
import Image from 'next/image';
import Logo from '@/../public/LogoHead.png';

export function Header() {
  return (
      <Head>

        <div className="logo">
          <Image src={Logo} alt="Logo" />
          <div className="logoInfo">
          <h1>Dr. Eliseu Amaral</h1>
          <p>CRO-CE 2354</p>
          </div>
        </div>

    <div className="headerInfo">

        <nav>
          <a href="#especialidades">Especialidades</a>
          <a href="#sobre">Sobre</a>
          <a href="">Contato</a>
        </nav>

        <a id="wppContact" target="_" href="https://wa.me/85988994048?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação!">Fale conosco</a>
    </div>

      </Head>
  );
}
