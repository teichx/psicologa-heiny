import React, { FC } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Language } from "../i18n/Language";
import FirsSectionBackground from "../images/pexels-anna-tarazevich-6486618-purple.jpg";
import FirstSectionImage from "../images/196-centered.jpg";
import AboutMeImage from "../images/232.jpg";
import { Footer, Menu, Service } from "../components";

const IndexPage: FC<PageProps> = () => (
  <div className="relative">
    <Menu />

    <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0 z-[-1]">
      <img
        src={FirsSectionBackground}
        className="fixed w-full h-full top-0 left-0 right-0 bottom-0 object-cover"
      />
    </div>

    <div id="home">
      <div className="w-full min-h-screen flex justify-center items-center relative z-1 text-white">
        <div className="container px-5 sm:px-5 flex flex-wrap items-center justify-between">
          <div className="w-full order-2 lg:w-6/12 lg:max-w-[430px] xl:max-w-[565px] xl:w-6/12 lg:order-none">
            <h2 className="font-crimson text-[3.125rem] sm:text-[2.95rem] md:text-[3.6rem] lg:text-[2.125rem] xl:text-[2.75rem]">
              <span>{Language.Principal.Category}</span>
              <span> </span>
              <span>{Language.Principal.Identifier}</span>
            </h2>

            <h1 className="text-8xl sm:text-[6.375rem] md:text-[7.75rem] lg:text-7xl xl:text-8xl">
              {Language.Principal.Title}
            </h1>

            <div className="mt-6 pt-6 max-w-[450px] ml-auto md:max-w-[450px] lg:max-w-[380px] xl:max-w-[450px]">
              <h3 className="font-crimson ml-auto mr-0 max-w-[250px] sm:max-w-full text-4xl mb-0 md:text-4xl lg:text-3xl xl:text-4xl">
                {Language.Principal.Legend.map((x) => (
                  <span key={x}>
                    {x}
                    <br />
                  </span>
                ))}
              </h3>
              <h4 className="text-right text-2xl md:text-2xl">
                {Language.Principal.LegendAuthor}
              </h4>
            </div>
          </div>

          <div className="w-full mx-auto mb-8 lg:w-6/12 lg:mx-0">
            <div className="w-100">
              <img src={FirstSectionImage} className="rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <section id={Language.Menu.Services.Id} className="py-[5%] text-white">
      <div className="container px-5 mx-auto">
        <div className="w-full flex flex-wrap items-stretch justify-between">
          <div className="w-full xl:w-5/12 flex flex-col justify-between">
            <h2 className="font-crimson">{Language.Services.Title}</h2>

            <div className="h-full mb-10 flex items-center">
              <div>
                <h3 className="font-crimson my-8">
                  {Language.Services.Topics.Title}
                </h3>

                <div className="md:grid md:grid-cols-2 2xl:grid-cols-[300px_330px]">
                  {Language.Services.Topics.Items.map((paragraph) => (
                    <div key={paragraph}>
                      <p className="mb-0">{paragraph}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-6/12">
            <div className="lg:grid grid-cols-2 gap-5">
              <Service
                variant="online"
                title={Language.Services.Modes.Online.Title}
                text={Language.Services.Modes.Online.Text}
              />

              <Service
                variant="faceToFace"
                title={Language.Services.Modes.FaceToFace.Title}
                text={Language.Services.Modes.FaceToFace.Text}
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id={Language.Menu.About.Id} className="bg-white py-[5%]">
      <div className="container px-5 mx-auto flex items-center justify-between flex-wrap">
        <div className="w-full mx-auto lg:w-5/12 lg:mx-0">
          <div className="w-100 h-0 pb-[100%] relative">
            <div className="rounded-full absolute h-full w-full overflow-hidden border-4 border-linkColor">
              <img
                src={AboutMeImage}
                className="w-[98%] h-[98%] absolute top-[1%] left-[1%] object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-6/12">
          <h2 className="font-crimson mb-6">{Language.AboutMe.Title}</h2>

          {Language.AboutMe.Text.map((paragraph) => (
            <p className="text-lg" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-gray-900 text-white">
      <div
        className="container mx-auto px-5 py-[2.5%] text-xl"
        dangerouslySetInnerHTML={{
          __html: Language.CVV.Text.map((x) =>
            x
              .replaceAll(
                "{Attention}",
                `<span>${Language.CVV.Attention}</span>`
              )
              .replaceAll(
                "{PhoneNumber}",
                `<a href="tel:${Language.CVV.InstitutePhone.Number}" class="text-linkColor hover:underline">${Language.CVV.InstitutePhone.Label}</a>`
              )
              .replaceAll(
                "{Site}",
                `<a href="${Language.CVV.InstituteSite.Url}" target="_blank" class="text-linkColor hover:underline">${Language.CVV.InstituteSite.Label}</a>`
              )
          ).join("<br />"),
        }}
      />
    </section>

    <Footer />
  </div>
);

export default IndexPage;

export const Head: HeadFC = () => <title>{Language.Metadata.Title}</title>;
