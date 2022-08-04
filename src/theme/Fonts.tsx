import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
          @font-face {
            font-family: 'Talampas';
            src: url('./fonts/Talampas-Regular.eot');
            src: url('./fonts/Talampas-Regular.eot?#iefix') format('embedded-opentype'),
                url('./fonts/Talampas-Regular.woff2') format('woff2'),
                url('./fonts/Talampas-Regular.woff') format('woff'),
                url('./fonts/Talampas-Regular.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }  
      `}
  />
);

export default Fonts;
