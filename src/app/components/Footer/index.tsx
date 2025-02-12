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
                    <p>Implantodontia</p>
                    <p>Reabilitação Oral</p>
                    <p>Próteses</p>
                    <p>Cirurgias</p>
                    <p>Endodontia</p>
                    <p>Periodontia</p>
                </li>

                <li>
                    <h3>Sobre</h3>
                    <a href="#sobre">Sobre mim</a>
                    <a href="#sobre">Sobre nós</a>
                </li>

                <li>
                    <h3>Contato</h3>
                    <p>Telefone: (85) 98899-4048</p>
                    <p>Visitar Endereço</p>
                    <a target="_" href="https://wa.me/85988994048?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação!">Fale conosco via Whatsapp</a>
                    <p>Fale conosco via E-mail</p>
                </li>

            </ul>

        </Footer>
    )
}