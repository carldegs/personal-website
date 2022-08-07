import { useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

import useWindowSize from './useWindowSize';

const useParallax = (
  ref: React.MutableRefObject<HTMLDivElement>,
  applyOffset = false
) => {
  const { scrollY } = useScroll();
  const [offset, setOffset] = useState(0);
  const { height } = useWindowSize();
  const y = useTransform(scrollY, [offset, offset + height], [0, -height]);

  useEffect(() => {
    if (!ref?.current) {
      return;
    }

    if (applyOffset) {
      setOffset(ref.current.offsetTop);
    }
  }, [applyOffset, ref]);

  return y;
};

export default useParallax;
