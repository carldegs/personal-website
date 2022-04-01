import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      html: {
        height: '100vh',
        scrollBehavior: 'smooth',
        scrollSnapType: 'y mandatory',
      },
    },
  },
});

export default theme;
