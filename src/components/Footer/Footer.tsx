import React from "react";
import Butterfly from "-!svg-react-loader!../../images/butterfly.svg";
import Envelope from "-!svg-react-loader!../../images/fontawesome/envelope.svg";
import Instagram from "-!svg-react-loader!../../images/fontawesome/instagram.svg";
import Whatsapp from "-!svg-react-loader!../../images/fontawesome/whatsapp.svg";
import { FooterIcon } from "./FooterIcon";
import { InternalLink } from "../InternalLink";

const linkClass = "text-lg hover:text-[#000] hover:underline";

export const Footer = () => (
  <footer style={{ backdropFilter: "blur(12px)" }}>
    <div className="container px-5 mx-auto flex justify-center items-center py-[5%] z-2 relative text-[#2f2f2f] flex-wrap">
      <div className="w-full max-w-[750px]">
        <div className="flex justify-center sm:justify-between items-center flex-wrap my-4">
          <div className="flex items-center">
            <div className="w-[200px]">
              <Butterfly className="h-full w-full" />
            </div>

            <div>
              <h2 className="text-3xl mb-0 text-[#FA33AE]">Heiny Domingos</h2>
              <h3 className="font-crimson text-xl text-[#A77636]">
                Psicóloga CRP 04/ 70574
              </h3>
            </div>
          </div>

          <div className="ml-[140px] md:ml-auto">
            <div className="ml-0 md:ml-5 grid grid-cols-3 gap-3 w-[164px]">
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
        </div>

        <div className="bg-[#969696] w-full h-[1px] opacity-60 mb-8" />

        <div className="w-full">
          <div className="flex justify-around flex-wrap gap-4">
            <div className="w-full md:w-auto">
              <p>Links</p>

              <div>
                <InternalLink
                  href="#home"
                  className="text-lg hover:text-[#000] hover:underline"
                >
                  Inicio
                </InternalLink>
              </div>
              <div>
                <InternalLink
                  href="#services"
                  className="text-lg hover:text-[#000] hover:underline"
                >
                  Serviços
                </InternalLink>
              </div>
              <div>
                <InternalLink
                  href="#about-me"
                  className="text-lg hover:text-[#000] hover:underline"
                >
                  Sobre mim
                </InternalLink>
              </div>
              <div>
                <InternalLink
                  href="#contact"
                  className="text-lg hover:text-[#000] hover:underline"
                >
                  Contato
                </InternalLink>
              </div>
            </div>

            <div className="w-full md:w-auto">
              <p>Contato</p>

              <div>
                <a
                  href="https://wa.me/5531991263286?text=Ol%C3%A1%2C+vim+pelo+seu+site%2C+gostaria+de+saber+mais."
                  className={linkClass}
                >
                  (31) 9 9126-3286
                </a>
              </div>

              <div>
                <a
                  href="mailto:psiheinydomingos@gmail.com"
                  className={linkClass}
                >
                  psiheinydomingos@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
