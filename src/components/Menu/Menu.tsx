import React from "react";
import { Language } from "../../i18n/Language";
import { InternalLink } from "../InternalLink";

export const Menu = () => {
  const linkClass =
    "inline-block p-5 mx-3 text-lg transition-all hover:bg-white hover:text-black hover:shadow-md";

  return (
    <header className="fixed top-0 left-0 z-10 w-full text-white">
      <div className="container mx-auto">
        <div className="w-full flex justify-center">
          <InternalLink href={Language.Menu.Home.Id} className={linkClass}>
            {Language.Menu.Home.Label}
          </InternalLink>
          <InternalLink href={Language.Menu.Services.Id} className={linkClass}>
            {Language.Menu.Services.Label}
          </InternalLink>

          <InternalLink href={Language.Menu.About.Id} className={linkClass}>
            {Language.Menu.About.Label}
          </InternalLink>
          <InternalLink href={Language.Menu.Contact.Id} className={linkClass}>
            {Language.Menu.Contact.Label}
          </InternalLink>
        </div>
      </div>
    </header>
  );
};
