import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      html: {
        height: '100vh',
        scrollBehavior: 'smooth',
        scorllSnap: 'y mandatory',
      },
    },
  },
  fonts: {
    heading: 'OverpassVariable, sans-serif',
    body: 'OverpassVariable, sans-serif',
  },
});

export default theme;
