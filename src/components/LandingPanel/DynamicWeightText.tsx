import { Box, Flex, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useEffect, useMemo, useRef } from 'react';

import useParallax from '../../hooks/useParallax';
import MotionBox from '../Motion/MotionBox';
import { dynamicTextVariants } from './constants';
import { getRelativeDistance } from './utils';

interface Props {
  text: string[];
  mouseEvent: any;
}

const DynamicWeightText: React.FC<Props> = ({ text, mouseEvent }) => {
  const textRefs = useRef([]);
  const boxRef = useRef();
  const y = useParallax(boxRef);
  const maxDistance = 12;
  const minWeight = 100;
  const maxWeight = 600;

  const parsedLines = useMemo(() => {
    let numLetters = 0;
    const lines = text.map((line) =>
      line.split(' ').map((word) =>
        word.split('').map((letter) => {
          numLetters += 1;
          return { letter, pos: numLetters - 1 };
        })
      )
    );

    return {
      numLetters,
      lines,
    };
  }, [text]);

  useEffect(() => {
    textRefs.current = textRefs.current.slice(0, parsedLines.numLetters);
  }, [parsedLines.numLetters]);

  return (
    <Box
      as={motion.div}
      display="flex"
      flexWrap="wrap"
      w="min-content"
      mr={-4}
      ref={boxRef}
      style={{ y }}
    >
      {parsedLines.lines.map((line, i) => (
        <Flex
          key={JSON.stringify(line)}
          align="flex-end"
          overflow="hidden"
          w="full"
        >
          <Flex
            as={MotionBox}
            w="full"
            justify="flex-end"
            custom={i}
            variants={dynamicTextVariants}
            initial="start"
            animate="end"
          >
            {line.map((word) => (
              <Flex key={JSON.stringify(word)} mr={2.5}>
                {word.map(({ letter, pos }) => {
                  const distanceRatio =
                    mouseEvent && textRefs.current?.[pos]
                      ? getRelativeDistance(
                          mouseEvent,
                          textRefs.current[pos],
                          maxDistance
                        ) / maxDistance
                      : 1;

                  const weight = Math.round(
                    (1 - distanceRatio) * maxWeight + minWeight
                  );
                  return (
                    <Heading
                      ref={(el) => {
                        textRefs.current[pos] = el;
                      }}
                      key={`${word}-${letter}-${pos}`}
                      color="white"
                      fontWeight={weight}
                      userSelect="none"
                      fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
                    >
                      {letter}
                    </Heading>
                  );
                })}
              </Flex>
            ))}
          </Flex>
        </Flex>
      ))}
    </Box>
  );
};

export default DynamicWeightText;
