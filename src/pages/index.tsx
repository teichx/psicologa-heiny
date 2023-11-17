import React, { FC } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Language } from "../i18n/Language";
import FirsSectionBackground from "../images/pexels-anna-tarazevich-6486618-purple.jpg";
import FirstSectionImage from "../images/196-centered.jpg";
import { Menu } from "../components";

const IndexPage: FC<PageProps> = () => (
  <div className="relative">
    <Menu />

    <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0 z-[-1]">
      <img
        src={FirsSectionBackground}
        className="absolute w-full h-full top-0 left-0 right-0 bottom-0 object-cover"
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
  </div>
);

export default IndexPage;

export const Head: HeadFC = () => <title>{Language.Metadata.Title}</title>;
