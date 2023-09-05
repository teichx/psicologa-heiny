import React, { FC } from 'react';

import type { PageProps } from 'gatsby';

import { Container, CustomThemeProvider } from '../components';

export { Head } from '../components';

const IndexPage: FC<PageProps> = () => (
  <CustomThemeProvider>
    <Container>
      <h1>Nome</h1>
    </Container>
  </CustomThemeProvider>
);

export default IndexPage;
