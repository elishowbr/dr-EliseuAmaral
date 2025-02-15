import { Footer } from "./styles";

export function Rodape() {
    return (
        <Footer>
            <ul>
                <li>
                    <h3>Dr. Eliseu Amaral</h3>
                    <p>CRO-CE 2354</p>
                </li>

                <li>
                    <h3>Especialidades</h3>
                    <a href="#especialidades">Implantodontia</a>
                    <a href="#especialidades">Reabilitação Oral</a>
                    <a href="#especialidades">Próteses</a>
                    <a href="#especialidades">Cirurgias</a>
                    <a href="#especialidades">Endodontia</a>
                    <a href="#especialidades">Periodontia</a>
                </li>

                <li>
                    <h3>Sobre</h3>
                    <a href="#sobre">Sobre mim</a>
                    <a href="#sobre">Sobre nós</a>
                </li>

                <li>
                    <h3>Contato</h3>
                    <a href="tel:+5585988994048">Telefone:(85) 98899-4048</a>
                    <a target="_blank" href="https://www.google.com/maps?ll=-3.713843,-38.560541&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&q=R.+Cruzeiro+do+Sul,+321+-+Álvaro+Weyne+Fortaleza+-+CE+60335-190">Visitar Endereço</a>
                    <a target="_blank" href="https://wa.me/85988994048?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação!">Fale conosco via Whatsapp</a>
                    <a href="mailto:eliseu.mrl@gmail.com">Fale conosco via E-mail</a>
                </li>

            </ul>

        </Footer>
    )
}