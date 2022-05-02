import { useDimensions, Center } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useRef, useEffect } from 'react';

import { getHomeSectionData } from '../utils/routes';

export const ScrollableSection: React.FC<{
  hash: string;
  isDark?: boolean;
}> = ({ hash, isDark, children }) => {
  const ref = useRef();
  const dimensions = useDimensions(ref, true);
  const router = useRouter();

  useEffect(() => {
    if (
      dimensions?.borderBox?.top === 0 &&
      hash !== getHomeSectionData(window.location.hash).hash
    ) {
      router.replace({ hash });
    }
  }, [dimensions, hash, router]);

  return (
    <Center
      as="section"
      bg={isDark ? 'black' : 'inherit'}
      h="100vh"
      scrollSnapAlign="start"
      key={hash}
      id={hash}
      ref={ref}
    >
      {children}
    </Center>
  );
};
