import React, { AnchorHTMLAttributes, DetailedHTMLProps, FC } from "react";

export const InternalLink: FC<
  Omit<
    DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    "onClick"
  >
> = ({ href, ...props }) => {
  const hrefParsed = href?.startsWith("#") ? href : `#${href || ""}`;

  return (
    <a
      href={hrefParsed}
      onClick={(e) => {
        e.preventDefault();

        const destiny = document.querySelector(hrefParsed);
        if (!destiny) return;

        destiny.scrollIntoView({
          inline: "center",
          block: "center",
          behavior: "smooth",
        });
      }}
      {...props}
    />
  );
};
