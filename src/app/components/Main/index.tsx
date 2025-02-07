import { Main } from "./styles";
import Image from 'next/image'
// Main? sla...
const imagem = 'linkImagem'
const descImagem = 'descriçãoIcone'
const objetoLista = 'Coisas aqui'

export function Especialidades() {
    return (
        <Main className="especialidades">
            <section className="servicos">
                <h2>Especialidades e Serviços</h2>
                <ul className="specialtys">
                    <li className="specialtyitem"><Image src={imagem} alt={descImagem} /><h3>Implantodontia</h3></li>
                    <li className="specialtyitem"><Image src={imagem} alt={descImagem} /><h3>Implantodontia</h3></li>
                    <li className="specialtyitem"><Image src={imagem} alt={descImagem} /><h3>Implantodontia</h3></li>
                    <li className="specialtyitem"><Image src={imagem} alt={descImagem} /><h3>Implantodontia</h3></li>
                    <li className="specialtyitem"><Image src={imagem} alt={descImagem} /><h3>Implantodontia</h3></li>
                    <li className="specialtyitem"><Image src={imagem} alt={descImagem} /><h3>Implantodontia</h3></li>
                </ul>

                <article className="card">
                    <Image src={imagem} alt={descImagem}/>
                    <h2>{objetoLista}</h2>
                    <p>{objetoLista}</p>
                </article>
            </section>

        </Main>
    )
}