import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/overpass/400.css';
import '@fontsource/overpass/variable.css';
import type { AppProps } from 'next/app';
import React from 'react';

import theme from '../theme';
import Fonts from '../theme/Fonts';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
