import React from "react";
import Butterfly from "-!svg-react-loader!../../images/butterfly.svg";
import Envelope from "-!svg-react-loader!../../images/fontawesome/envelope.svg";
import Instagram from "-!svg-react-loader!../../images/fontawesome/instagram.svg";
import Whatsapp from "-!svg-react-loader!../../images/fontawesome/whatsapp.svg";
import { FooterIcon } from "./FooterIcon";
import { InternalLink } from "../InternalLink";

const linkClass = "text-lg hover:text-linkColor hover:underline";

export const Footer = () => (
  <footer style={{ backdropFilter: "blur(12px)" }}>
    <div className="container px-5 mx-auto flex justify-between items-center py-[5%] z-2 relative text-[#2f2f2f] flex-wrap">
      <div className="w-full mx-auto mb-5 lg:w-3/12 lg:mx-0 lg:mb-0 max-w-[200px]">
        <div className="w-[200px]">
          <Butterfly className="h-full w-full" />
        </div>
        <h2 className="text-3xl mb-0 text-center">Heiny Domingos</h2>

        <h3 className="font-crimson text-xl mx-2 mb-0">Psicóloga clínica</h3>
        <h3 className="font-crimson text-lg mx-2">CRP 04/ 70574</h3>

        <div className="flex w-full justify-between align-center mt-5">
          <FooterIcon
            Icon={Envelope}
            href="mailto:psiheinydomingos@gmail.com"
          />

          <FooterIcon
            Icon={Whatsapp}
            href="https://wa.me/5531991263286?text=Ol%C3%A1%2C+vim+pelo+seu+site%2C+gostaria+de+saber+mais."
          />

          <FooterIcon
            Icon={Instagram}
            href="https://www.instagram.com/psi.heinydomingos/"
          />
        </div>
      </div>

      <div className="w-full lg:w-8/12">
        <div className="bg-[#2f2f2f] w-full h-[1px] opacity-60 mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p>Links</p>

            <div>
              <InternalLink
                href="#home"
                className="text-lg hover:text-linkColor hover:underline"
              >
                Inicio
              </InternalLink>
            </div>
            <div>
              <InternalLink
                href="#services"
                className="text-lg hover:text-linkColor hover:underline"
              >
                Serviços
              </InternalLink>
            </div>
            <div>
              <InternalLink
                href="#about-me"
                className="text-lg hover:text-linkColor hover:underline"
              >
                Sobre mim
              </InternalLink>
            </div>
            <div>
              <InternalLink
                href="#contact"
                className="text-lg hover:text-linkColor hover:underline"
              >
                Contato
              </InternalLink>
            </div>
          </div>

          <div>
            <p>Localização</p>

            <p className="text-lg">Betim - Minas Gerais</p>
          </div>

          <div>
            <p>Contato</p>

            <div>
              <a href="tel:31991263286" className={linkClass}>
                (31) 9 9126-3286
              </a>
            </div>

            <div>
              <a href="mailto:psiheinydomingos@gmail.com" className={linkClass}>
                psiheinydomingos@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
