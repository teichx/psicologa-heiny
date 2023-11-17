import React, { FC } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Language } from "../i18n/Language";
import { Menu } from "../components";

const IndexPage: FC<PageProps> = () => (
  <div>
    <Menu />
  </div>
);

export default IndexPage;

export const Head: HeadFC = () => <title>{Language.Metadata.Title}</title>;
