import React, { FC } from "react";
import type { HeadFC, PageProps } from "gatsby";
import FirsSectionBackground from "../images/background.jpg";
import FirstSectionImage from "../images/with-circle-3.png";
import AboutMeImage from "../images/232.jpg";
import ServicesImage from "../images/DSC_0220-2.jpg";
import { Footer, Menu } from "../components";

const IndexPage: FC<PageProps> = () => (
  <div className="relative overflow-hidden">
    <Menu />

    <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0 z-[-1]">
      <img
        src={FirsSectionBackground}
        className="fixed w-full h-full top-0 left-0 right-0 bottom-0 object-cover bg-[#d3d3d1]"
        style={{ filter: "blur(6px)" }}
      />
    </div>

    <div id="home" className="text-[#222]">
      <div className="w-full min-h-screen flex justify-center items-center relative z-1">
        <div className="container flex flex-wrap items-center justify-around pt-[120px] mx-[1rem] sm:mx-[4rem]">
          <div className="w-full order-2 sm:w-[550px] lg:w-5/12 lg:ml-1/12 xl:w-5/12 lg:order-none">
            <div className="w-full ml-auto text-right xl:w-[540px]">
              <h2 className="text-[1.35rem] font-light">
                <span>Psicóloga clínica CRP 04/70574</span>
              </h2>

              <h1 className="my-7 text-center text-[#000] text-[2.7rem] sm:text-[3.5rem] lg:text-[3.125rem] xl:text-7xl font-amsterdam leading-loose">
                Heiny Domingos
              </h1>

              <div className="mt-[5rem]">
                <h3 className="text-[1.5rem] ml-auto mr-0 text-center sm:max-w-full">
                  A Psicanálise é, em sua essência, <br /> uma cura pelo amor!
                </h3>
                <h4 className="text-[1.5rem] text-right">Sigmund Freud</h4>
              </div>
            </div>
          </div>

          <div className="w-9/12 mx-auto mb-8 lg:mb-0 lg:w-6/12 lg:mx-0">
            <div className="w-full mx-auto max-w-[440px] 2xl:max-w-[520px]">
              <img src={FirstSectionImage} className="w-[100%] h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <section
      id="services"
      className="py-[12.5%] lg:py-[5%] px-[1rem] sm:px-[4rem]"
    >
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <div className="w-full lg:w-6/12 rounded-2xl overflow-hidden">
          <img src={ServicesImage} />
        </div>

        <div className="mt-6 w-full lg:w-5/12">
          <div className="bg-[#A77636] text-[#fff] p-5 rounded-2xl">
            <h2 className="mb-6 text-center">Atendimento Online</h2>

            <p className="text-justify">
              O atendimento psicológico virtual é devidamente regulamentado pelo
              Conselho Federal de Psicologia e deve seguir todos os princípios
              éticos e de sigilo, adotados em atendimentos presenciais. O
              atendimento ocorre através de plataformas de vídeo, como o Google
              Meet, e tem duração média de 50 minutos. Essa modalidade está
              disponível para pessoas residentes em todo o Brasil e no mundo.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      id="about-me"
      className="bg-white py-[12.5%] lg:py-[5%] px-[1rem] sm:px-[4rem]"
    >
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="w-full lg:w-6/12">
          <h2 className="mb-6">Sobre mim</h2>
          <div className="text-justify">
            <p>
              Olá, como vai? Me chamo Heiny Domingos de Freitas, sou formada em
              Psicologia pela Faculdade Pitágoras, atuo através da abordagem
              psicanalítica lacaniana.
            </p>
            <p>
              Durante a minha trajetória acadêmica, trabalhei nos setores de
              clínica, em escolas, projetos sociais. Possuo experiência com
              temáticas como: ansiedade, depressão, relacionamentos amorosos,
              alcoolismo, acompanhamento de gestantes, luto, questões
              familiares.
            </p>
            <p>
              Acredito que a Psicologia é uma ferramenta fundamental para
              auxiliar as pessoas a lidarem com seus conflitos internos,
              compreenderem suas emoções e se desenvolverem pessoalmente. Por
              isso, tenho grande satisfação em atuar nessa área e contribuir
              para o bem-estar dos meus pacientes.
            </p>
            <p>
              Acredito que a empatia, o respeito e a confidencialidade são
              fundamentais em um processo terapêutico. Por isso, atendo meus
              pacientes de forma individualizada, respeitando suas
              particularidades e necessidades.
            </p>
          </div>
        </div>

        <div className="w-full mx-auto lg:w-5/12 lg:mx-0 mt-6 lg:mt-0">
          <div className="w-100 h-0 pb-[100%] relative">
            <div className="rounded-full absolute h-full w-full overflow-hidden border-4 border-[#A77636]">
              <img
                src={AboutMeImage}
                className="w-[98%] h-[98%] absolute top-[1%] left-[1%] object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-gray-900 text-white px-[1rem] sm:px-[4rem]">
      <div className="container mx-auto py-[12.5%] lg:py-[3.5%] text-center">
        <p>
          Em caso de crise, ligue para{" "}
          <a href="tel:+55188" className="text-[#d9606f] hover:underline">
            188 (CVV)
          </a>{" "}
          ou acesse o site{" "}
          <a
            href="https://www.cvv.org.br/"
            target="_blank"
            className="text-[#d9606f] hover:underline"
          >
            www.cvv.org.br
          </a>
          .
        </p>
        <p className="mb-0">
          Em caso de emergência, procure atendimento em um hospital mais
          próximo.
        </p>
      </div>
    </section>

    <div id="contact">
      <Footer />
    </div>
  </div>
);

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Heiny Domingos - Psicóloga clínica</title>

    <link
      rel="preload"
      href="/fonts/amsterdam-four.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />
  </>
);
