import React, { useEffect, useState } from "react";
import { InternalLink } from "../InternalLink";
import Butterfly from "-!svg-react-loader!../../images/butterfly.svg";

const MenuLink = ({ href, text }: { href: string; text: string }) => (
  <InternalLink href={href} className="menu-link">
    {text}
  </InternalLink>
);

const debounce = (func: Function, timeout: number) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: unknown[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

export const Menu = () => {
  const [menuClass, setMenuClass] = useState<"menu-on-top" | "menu-on-scroll">(
    "menu-on-top"
  );
  const [burguerClass, setBurguerClass] = useState<"" | "open">("");

  useEffect(() => {
    const handleScroll = debounce(() => {
      setMenuClass(window.scrollY > 70 ? "menu-on-scroll" : "menu-on-top");
    }, 100);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`menu ${menuClass}`}
      data-mobile-open={burguerClass === "open"}
      data-menu-state={menuClass === "menu-on-scroll" ? "scroll" : "top"}
    >
      <div className="bg-activation" />
      <div className="container mx-auto hidden md:block">
        <div className="w-full flex justify-center align-center">
          <MenuLink href="#home" text="Inicio" />
          <MenuLink href="#services" text="Serviços" />

          <div className="menu-logo">
            <Butterfly className="h-auto butterfly-logo" />
          </div>

          <MenuLink href="#about-me" text="Sobre mim" />
          <MenuLink href="#contact" text="Contato" />
        </div>
      </div>

      <div className="mobile container mx-0 block md:hidden overflow-hidden">
        <div className="flex justify-between items-center px-4">
          <div className="menu-logo">
            <Butterfly className="h-auto butterfly-logo" />
          </div>

          <div
            id="burguer"
            className={burguerClass}
            onClick={() => setBurguerClass((x) => (x ? "" : "open"))}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div
          className={`content ${burguerClass}`}
          onClick={(x) => {
            if ((x.target as HTMLAnchorElement)?.href) {
              setTimeout(() => setBurguerClass(""), 125);
            }
          }}
        >
          <MenuLink href="#home" text="Inicio" />
          <MenuLink href="#services" text="Serviços" />
          <MenuLink href="#about-me" text="Sobre mim" />
          <MenuLink href="#contact" text="Contato" />
        </div>
      </div>
    </header>
  );
};
