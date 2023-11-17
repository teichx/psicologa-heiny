import React, { AnchorHTMLAttributes, DetailedHTMLProps, FC } from "react";

export const InternalLink: FC<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> = ({ href, ...props }) => {
  const _ = "";

  return (
    <a href={href?.startsWith("#") ? href : `#${href || ""}`} {...props} />
  );
};
