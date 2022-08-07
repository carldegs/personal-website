import { Box, Container, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import { motion, useInView, Variants } from 'framer-motion';
import React, { useRef, useState } from 'react';

import { createLinearGradient } from '../../utils';
import MotionBox from '../Motion/MotionBox';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export const titleVariants: Variants = {
  start: {
    y: -80,
  },
  end: {
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.25,
      ease: [0.86, 0, 0.07, 1],
    },
  },
};

export const cardVariants: Variants = {
  start: {
    y: -800,
  },
  end: (i) => ({
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.5 + i * 0.125,
      ease: [0.86, 0, 0.07, 1],
    },
  }),
};

export const cardContainerVariants: Variants = {
  start: {
    overflow: 'hidden',
    y: 0,
  },
  end: {
    overflow: 'visible',
    y: 0,
    transition: {
      delay: 2,
    },
  },
};

const projects = [
  {
    name: 'Saltong',
    tags: ['Web', 'Game'],
    text: 'A Wordle-like website which started as a personal project but ended up with 500,000+ active users and was featured on news and entertainment outlets such as GMA News, Inquirer, Vice and Spot PH.',
  },
  {
    name: 'PA Coaching',
    tags: ['Web', 'Web3'],
    isWide: true,
    // TODO: Change
    text: 'A template for a web application that uses NextJS and Typescripts which also includes linting and styling rules, an integrated UI Framework (Chakra UI + Motion), a custom layout management, and a “plug-and-play” form handler based on react-hook-form.',
  },
  {
    name: 'The Blind Vote',
    tags: ['Web'],
    text: 'An online quiz that allows undecided voters for the 2022 Philippine Election to choose their presidential candidate based only on their experience and platforms. Released days before the election and in partnership with the YouTube group Rec•Create, it reached 200,000 users.',
  },
  {
    name: 'NextJS + Typescript Boilerplate',
    tags: ['Web'],
    text: 'A template for a web application that uses NextJS and Typescripts which also includes linting and styling rules, an integrated UI Framework (Chakra UI + Motion), a custom layout management, and a “plug-and-play” form handler based on react-hook-form.',
  },
  {
    name: 'Street Bridge',
    tags: ['Web', 'Game'],
    isWide: true,
    text: 'A web-based realtime multiplayer card game based on a modified version of Bridge. The project was created using ReactJS and Firebase.',
  },
  {
    name: 'Heath Williams Website',
    tags: ['Web', 'Real Estate'],
    text: 'A Real Estate Website based on NextJS, and integrated Google Maps, Send Grid and various third party real estate listing services.',
    isWide: true,
  },
  {
    name: 'Work for the Best',
    tags: ['Web', 'AI'],
    text: 'A website that shows the top companies to work for in Australia. Also implemented an AI-based survey that recommends to users companies that match their criteria.',
  },
].map((data) => ({
  ...data,
  img: `https://picsum.photos/seed/${data.name.split(' ').join('-')}/1600/900`,
  imgPos: 'center bottom',
}));

const ProjectsPanel: React.FC = () => {
  const panelRef = useRef();
  const isInView = useInView(panelRef);
  const [selected, setSelected] = useState(-1);

  return (
    <Flex
      bgColor="gray.800"
      bgImage={createLinearGradient('#C850C0', '#FFCC70')}
      bgBlendMode="multiply"
      id="projects"
      minH="100vh"
      pt={20}
      ref={panelRef}
    >
      <Container maxW="container.xl" centerContent>
        <Box as={motion.div} overflow="hidden">
          <Heading
            color="white"
            as={motion.div}
            variants={titleVariants}
            initial="start"
            animate={isInView ? 'end' : 'start'}
          >
            Projects
          </Heading>
        </Box>
        {projects.map(
          (project, i) =>
            selected === i && (
              <ProjectModal
                {...project}
                onClick={() => {
                  setSelected(-1);
                }}
              />
            )
        )}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 10 }}
          spacing={3}
          w="full"
          alignItems="center"
          mt={4}
        >
          {projects.map((project, i) => (
            <MotionBox
              key={`${project.name}/card`}
              gridColumn={{
                base: 'span 1',
                lg: project?.isWide ? 'span 4' : 'span 2',
              }}
              variants={cardContainerVariants}
              initial="start"
              animate={isInView && 'end'}
            >
              <MotionBox
                key={`${project.name}/card`}
                custom={i}
                variants={cardVariants}
                initial="start"
                animate={isInView && 'end'}
              >
                {selected !== i && (
                  <ProjectCard
                    onClick={() => {
                      setSelected(i);
                    }}
                    {...project}
                  />
                )}
              </MotionBox>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default ProjectsPanel;
