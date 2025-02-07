import { Head } from "./styles";
import Image from 'next/image';
import Logo from '@/../public/LogoHead.png';

export function Header() {
  return (
      <Head className="container">
        <div className="logo">
          <Image src={Logo} alt="Logo" />
          <h2>Dr. Eliseu Amaral</h2>
          <p>CRO-CE 2354</p>
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
