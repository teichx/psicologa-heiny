import React from "react";
import { Language } from "../../i18n/Language";

export const Menu = () => {
  const linkClass =
    "inline-block p-5 mx-3 text-lg transition-all hover:bg-white hover:text-black hover:shadow-md";

  return (
    <header className="fixed top-0 left-0 z-10 w-full text-white">
      <div className="container mx-auto">
        <div className="w-full flex justify-center">
          <a href="#home" className={linkClass}>
            {Language.Menu.Home}
          </a>
          <a href="#services" className={linkClass}>
            {Language.Menu.Services}
          </a>

          <a href="#about-me" className={linkClass}>
            {Language.Menu.About}
          </a>
          <a href="#contact" className={linkClass}>
            {Language.Menu.Contact}
          </a>
        </div>
      </div>
    </header>
  );
};
