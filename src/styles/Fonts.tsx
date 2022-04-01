import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Talampas';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('./fonts/talampas.otf') format('otf');
      }
      `}
  />
);

export default Fonts;
