import React from "react";
import Chair from "-!svg-react-loader!../images/chair.svg";
import Headphone from "-!svg-react-loader!../images/headphone.svg";

const IconVariant = {
  online: Headphone,
  faceToFace: Chair,
} as const;

export const Service = ({
  text,
  title,
  variant,
}: {
  title: string;
  text: string;
  variant: keyof typeof IconVariant;
}) => {
  const Icon = IconVariant[variant];

  return (
    <div className="border border-gold p-5 rounded mb-5">
      <div className="w-[96px] mb-4 fill-white">
        <Icon className="w-full" />
      </div>

      <h3 className="font-crimson mb-6">{title}</h3>
      <p className="text-xl mb-0">{text}</p>
    </div>
  );
};
