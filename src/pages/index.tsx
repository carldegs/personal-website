/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Text, Link } from '@chakra-ui/layout';
import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Stack,
} from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import {
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  Envelope,
} from 'phosphor-react';
import { useState } from 'react';

import DynamicWeightText from '../components/DynamicWeightText';
import MotionBox from '../components/MotionBox';
import { createRangeArr, mapCss } from '../utils';

// TODO: Move HEY related stuff to own component
const HEY_DURATION = 1.25;
const NUM_HEYS = 16;
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
        {createRangeArr(NUM_HEYS).map((i) => (
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
              opacity={1 - Math.log(i + 1) / Math.log(NUM_HEYS) + 0.3}
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
          align="flex-end"
          justify={{ base: 'flex-end', lg: 'center' }}
          maxW="container.lg"
          flexDir="column"
          py={8}
        >
          <DynamicWeightText
            text={[
              "I'm Carl de Guia,",
              'a Full-stack Engineer',
              'from the Philippines',
            ]}
            mouseEvent={mouseEvent}
          />
          <Stack
            mt={8}
            textAlign="right"
            spacing={0}
            fontSize={{ base: 'sm', md: 'md' }}
            as={motion.div}
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 1.5,
                duration: 0.125,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
          >
            <Text color="whiteAlpha.700" m={0}>
              <i>Sandale!</i> My website is still under construction.
            </Text>
            <Text color="whiteAlpha.700" m={0}>
              In the meantime, let&apos;s have a chat!
            </Text>
          </Stack>
          <HStack
            mt={4}
            spacing={2}
            as={motion.div}
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 1.625,
                duration: 0.125,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
          >
            <IconButton
              as={Link}
              aria-label="Github"
              icon={<GithubLogo size={24} weight="duotone" />}
              variant="ghost"
              colorScheme="purple"
              isExternal
              href="https://github.com/carldegs"
            />
            <IconButton
              as={Link}
              aria-label="Email"
              icon={<Envelope size={24} weight="duotone" />}
              variant="ghost"
              colorScheme="teal"
              isExternal
              href="https://www.linkedin.com/in/carl-justin-de-guia-b40a1b97"
            />
            <IconButton
              as={Link}
              aria-label="LinkedIn"
              icon={<LinkedinLogo size={24} weight="duotone" />}
              variant="ghost"
              colorScheme="linkedin"
              isExternal
              href="https://www.linkedin.com/in/carl-justin-de-guia-b40a1b97"
            />
            <IconButton
              as={Link}
              aria-label="Twitter"
              icon={<TwitterLogo size={24} weight="duotone" />}
              variant="ghost"
              colorScheme="twitter"
              isExternal
              href="https://twitter.com/carldegs"
            />
          </HStack>
        </Container>
      </Box>
    </Flex>
  );
};

export default Home;
