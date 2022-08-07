/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Center, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Head from 'next/head';

import LandingPanel from '../components/LandingPanel';
import Navbar from '../components/Navbar';
import ProjectsPanel from '../components/ProjectsPanel';
import { createLinearGradient } from '../utils';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>carldegs</title>
        <meta
          name="description"
          content="The personal website of Carl de Guia."
        />
      </Head>
      <Navbar />
      <LandingPanel />
      <ProjectsPanel />
      <Center
        h="100vh"
        scrollSnapAlign="center"
        overflowX="hidden"
        bgColor="gray.800"
        bgImage={createLinearGradient('#C850C0', '#FFCC70')}
        bgBlendMode="multiply"
        pos="relative"
        w="full"
        id="resume"
      >
        <motion.div
          initial={{ x: 0, scale: 1 }}
          whileInView={{
            x: 0,
            scale: 2,
          }}
        >
          <Heading color="white">Resume</Heading>
        </motion.div>
      </Center>
      <Center
        h="100vh"
        scrollSnapAlign="center"
        overflowX="hidden"
        bgColor="gray.800"
        bgImage={createLinearGradient('#C850C0', '#FFCC70')}
        bgBlendMode="multiply"
        pos="relative"
        w="full"
        id="contact"
      >
        <motion.div
          initial={{ x: 0, scale: 1 }}
          whileInView={{
            x: 0,
            scale: 2,
          }}
        >
          <Heading color="white">Contact</Heading>
        </motion.div>
      </Center>
    </>
  );
};

export default Home;
