/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Text } from '@chakra-ui/layout';
import { Box, Container, Flex } from '@chakra-ui/react';
import { Variants } from 'framer-motion';
import { useState } from 'react';

import DynamicWeightText from '../components/DynamicWeightText';
import MotionBox from '../components/MotionBox';
import { createRangeArr, mapCss } from '../utils';

// TODO: Move HEY related stuff to own component
const HEY_DURATION = 1.5;
const NUM_HEYS = 24;
const START_DELAY = 0.3;

const timeRatio = HEY_DURATION / NUM_HEYS;
const heyVariants: Variants = {
  start: {
    y: -50,
    x: 9,
    opacity: 0,
    color: 'white',
  },
  end: (i) => ({
    y: 0,
    x: 0,
    opacity: 1,
    color: 'transparent',
    transition: {
      delay: START_DELAY + i * timeRatio,
      duration: timeRatio * 1.1,
      opacity: {
        duration: timeRatio * 1.2,
      },
      color: {
        delay: START_DELAY + i * timeRatio * 1.6,
        duration: 0.1,
      },
    },
    darken: {
      opacity: 0.3,
      x: 100,
      transition: {
        delay: 5,
      },
    },
  }),
};

const Home: React.FC = () => {
  const [mouseEvent, setMouseEvent] = useState<any>();

  return (
    <Flex h="100vh" pos="relative" overflow="hidden" bg="gray.800">
      <MotionBox
        zIndex={1}
        pos="absolute"
        background="linear-gradient(180deg, #4158D0 -55.69%, #C850C0 -10.9%, #FFCC70 44.31%)"
        h="full"
        w="full"
        mixBlendMode="multiply"
        left={0}
        right={0}
        top={0}
        bottom={0}
        m="auto"
      />
      <Flex
        pos="absolute"
        left="10%"
        flexDir="column"
        maxH="calc(100vh + 50px)"
        zIndex={0}
        color="white"
        top="-50px"
        userSelect="none"
      >
        {createRangeArr(24).map((i) => (
          <MotionBox
            custom={i}
            key={`hey-${i}`}
            my={{ base: '-34px', md: '-47px', lg: '-70px' }}
            ml={mapCss(
              {
                base: 10,
                md: 15,
                lg: 20,
              },
              (val) => `-${val * i}px`
            )}
            p={0}
            variants={heyVariants}
            initial="start"
            animate={['start', 'end']}
            //@ts-ignore
            transition={{
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Text
              fontSize={{ base: '8xl', md: '9xl', lg: '190px' }}
              fontFamily="talampas"
              color={i === 1 && 'white'}
              sx={
                i !== 1 && {
                  WebkitTextStroke: { base: '1px white', lg: '2px white' },
                }
              }
            >
              HEY
            </Text>
          </MotionBox>
        ))}
      </Flex>
      <Box w="full" h="full" onMouseMove={(e) => setMouseEvent(e)} zIndex={2}>
        <Container
          as={Flex}
          w="full"
          h="full"
          align="center"
          justify="flex-end"
          maxW="container.lg"
        >
          <DynamicWeightText
            text={[
              "I'm Carl de Guia,",
              'a Full-stack Engineer',
              'from the Philippines',
            ]}
            mouseEvent={mouseEvent}
          />
        </Container>
      </Box>
    </Flex>
  );
};

export default Home;
