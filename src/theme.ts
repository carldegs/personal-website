import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      html: {
        height: '100vh',
      },
      body: {
        height: '100%',
      },
    },
  },
});

export default theme;
