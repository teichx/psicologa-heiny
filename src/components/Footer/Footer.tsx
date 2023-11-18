import React from "react";
import { Language } from "../../i18n/Language";
import Butterfly from "-!svg-react-loader!../../images/butterfly.svg";
import Envelope from "-!svg-react-loader!../../images/fontawesome/envelope.svg";
import Instagram from "-!svg-react-loader!../../images/fontawesome/instagram.svg";
import Whatsapp from "-!svg-react-loader!../../images/fontawesome/whatsapp.svg";
import { FooterIcon } from "./FooterIcon";
import { InternalLink } from "../InternalLink";

const linkClass = "text-lg hover:text-linkColor hover:underline";

export const Footer = () => (
  <footer>
    <div className="container px-5 mx-auto flex justify-between items-center py-[5%] z-2 relative text-white flex-wrap">
      <div className="w-full mx-auto mb-5 lg:w-3/12 lg:mx-0 lg:mb-0 max-w-[200px]">
        <div className="w-[200px]">
          <Butterfly className="h-full w-full" />
        </div>
        <h2 className="text-3xl mb-0 text-center">
          {Language.Principal.Title}
        </h2>

        <h3 className="font-crimson text-xl mx-2 mb-0">
          {Language.Principal.Category}
        </h3>
        <h3 className="font-crimson text-lg mx-2">
          {Language.Principal.Identifier}
        </h3>

        <div className="flex w-full justify-between align-center mt-5">
          <FooterIcon
            Icon={Envelope}
            href={`mailto:${Language.Common.Email}`}
          />

          <FooterIcon Icon={Whatsapp} href={Language.Common.Whatsapp} />

          <FooterIcon Icon={Instagram} href={Language.Common.InstagramUrl} />
        </div>
      </div>

      <div className="w-full lg:w-8/12">
        <div className="bg-white w-full h-[1px] opacity-60 mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p>{Language.Footer.Links}</p>

            {[
              Language.Menu.Home,
              Language.Menu.Services,
              Language.Menu.About,
              Language.Menu.Contact,
            ].map(({ Id, Label }) => (
              <div key={Id}>
                <InternalLink
                  href={Id}
                  className="text-lg hover:text-linkColor hover:underline"
                >
                  {Label}
                </InternalLink>
              </div>
            ))}
          </div>

          <div>
            <p>{Language.Footer.Location}</p>

            <p className="text-lg">{Language.Common.Location}</p>
          </div>

          <div>
            <p>{Language.Footer.Contact}</p>

            <div>
              <a
                href={`tel:${Language.Common.PhoneNumber.Raw}`}
                className={linkClass}
              >
                {Language.Common.PhoneNumber.Formatted}
              </a>
            </div>

            <div>
              <a href={`mailto:${Language.Common.Email}`} className={linkClass}>
                {Language.Common.Email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
