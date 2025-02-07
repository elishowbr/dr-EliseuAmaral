import { Head } from "./styles";
import Image from 'next/image';
import Logo from '@/../public/LogoHead.png';

export function Header() {
  return (
      <Head className="container">

        <div className="logo">
          <Image src={Logo} alt="Logo" />
          <div className="logoInfo">
          <h1 id="titulo">Dr. Eliseu Amaral</h1>
          <p>CRO-CE 2354</p>
          </div>
        </div>

        <nav>
          <a href="">Especialidades</a>
          <a href="">Sobre</a>
          <a href="">Contato</a>
        </nav>

        <button>Fale Conosco</button>

      </Head>
  );
}
