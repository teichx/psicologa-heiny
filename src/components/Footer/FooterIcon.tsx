import React, { FC } from "react";

export const FooterIcon = ({
  Icon,
  href,
}: {
  Icon: FC<{ className: string }>;
  href: string;
}) => (
  <div className="w-[40px] h-[40px]">
    <a
      href={href}
      target="_blank"
      className="block bg-gold flex justify-center items-center rounded-full mx-auto"
    >
      <Icon className="w-[24px] h-[24px] fill-white m-2 hover:scale-110" />
    </a>
  </div>
);
