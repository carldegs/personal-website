import { Flex, Heading } from '@chakra-ui/react';
import { Variants } from 'framer-motion';
import React, { useEffect, useMemo, useRef } from 'react';

import MotionBox from './MotionBox';

interface Props {
  text: string[];
  mouseEvent: any;
}

const getDistance = (deltaX: number, deltaY: number) =>
  Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

const getRelativeDistance = (event, referenceElement, maxDistance = 99999) => {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight,
  };

  let reference = referenceElement.offsetParent;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  const centerX =
    (position.x - offset.left - offset.width / 2) / (offset.width / 2);
  const centerY =
    (position.y - offset.top - offset.height / 2) / (offset.height / 2);

  const distance = getDistance(centerX, centerY);
  return distance > maxDistance ? maxDistance : distance;
};

const onLoadVariants: Variants = {
  start: {
    y: -80,
    opacity: 0,
  },
  end: (i) => ({
    x: 0,
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      delay: 1 + 0.05 * i,
      ease: [0.86, 0, 0.07, 1],
    },
  }),
};

const DynamicWeightText: React.FC<Props> = ({ text, mouseEvent }) => {
  const textRefs = useRef([]);
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
    <MotionBox display="flex" flexWrap="wrap" w="min-content" mr={-4}>
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
            variants={onLoadVariants}
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
    </MotionBox>
  );
};

export default DynamicWeightText;
