import Image from "next/image";
import { ContactSection } from "./styles";

export function Contact() {
  return (
    <ContactSection id="contact">
      <h2>Contato</h2>
      <div id="contact-container">
        <ul>
          <li>
            <Image src={"/icons/compass.svg"} alt="" width={25} height={25} />
            <a target="_blank" href="https://www.google.com/maps?ll=-3.713843,-38.560541&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&q=R.+Cruzeiro+do+Sul,+321+-+Álvaro+Weyne+Fortaleza+-+CE+60335-190">Rua Cruzeiro do Sul, n° 321, Álvaro Weyne, Fortaleza</a>
          </li>
          <li>
            <Image src={"/icons/email.svg"} alt="" width={25} height={25} />
            <a href="mailto:eliseu.mrl@gmail.com">eliseu.mrl@gmail.com</a>
          </li>
          <li>
            <Image src={"/icons/smartphone.svg"} alt="" width={25} height={25} />
            <a href="tel:+5585988994048">(85) 98899-4048</a>
          </li>
          <li>
            <Image src={"/icons/whatsapp.svg"} alt="" width={25} height={25} />
            <a
              href="https://wa.me/85988994048?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação!"
              target="_blank"
            >
              Contato via Whatsapp
            </a>
          </li>
        </ul>

        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.4397166374774!2d-38.56311612543921!3d-3.713837743097371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c749f25007976d%3A0x43b07087dd3d9828!2sR.%20Cruzeiro%20do%20Sul%2C%20321%20-%20%C3%81lvaro%20Weyne%2C%20Fortaleza%20-%20CE%2C%2060335-190!5e0!3m2!1spt-BR!2sbr!4v1739377731500!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{border:0}}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </ContactSection>
  );
}
