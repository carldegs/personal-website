import { Container, Heading, HStack, Box, Text } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';

import { getChakraColorCss } from '../utils';

const panelButtonContainerVariants: Variants = {
  visible: {
    y: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      delay: 1.05,
    },
  },
  hidden: {
    y: -100,
    transition: {
      when: 'afterChildren',
    },
  },
};

const panelButtonVariants: Variants = {
  visible: {
    y: 0,
    transition: {
      ease: [0.86, 0, 0.07, 1],
    },
  },
  hidden: {
    y: -100,
  },
};

const headingVariants: Variants = {
  visible: {
    y: 0,
    transition: {
      ease: [0.86, 0, 0.07, 1],
      delay: 1,
    },
  },
  hidden: {
    y: -100,
  },
};

const panelList = [
  {
    label: 'Projects',
    key: 'projects',
  },
  {
    label: 'Resume',
    key: 'resume',
  },
  {
    label: 'Contact',
    key: 'contact',
  },
] as const;

const Navbar: React.FC = () => {
  const router = useRouter();
  return (
    <Box as={motion.nav} w="full" h="60px" maxH="60px" pos="fixed" zIndex={10}>
      <Container
        maxW="container.xl"
        h="full"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading
          as={motion.div}
          fontSize="3xl"
          fontFamily="Talampas, sans-serif"
          color="whiteAlpha.800"
          fontWeight="normal"
          userSelect="none"
          cursor="pointer"
          onClick={() => {
            // nav.goto('home');
            router.replace('/#home');
          }}
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          CARLDEGS
        </Heading>
        {/* <Hide below="md"> */}
        <HStack
          as={motion.div}
          spacing={6}
          variants={panelButtonContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {panelList.map(({ label, key }) => (
            <Text
              as={motion.div}
              textAlign="center"
              userSelect="none"
              cursor="pointer"
              color="whiteAlpha.700"
              onClick={() => {
                // nav.goto(key);
                router.replace(`/#${key}`);
              }}
              key={`navbuttons/${key}`}
              whileHover={{
                fontWeight: 700,
                color: getChakraColorCss('whiteAlpha.900'),
              }}
              minW="72px"
              variants={panelButtonVariants}
            >
              {label}
            </Text>
          ))}
        </HStack>
        {/* </Hide> */}
      </Container>
    </Box>
  );
};

export default Navbar;
