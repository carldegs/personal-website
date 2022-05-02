import { Box, Flex, Heading, HStack, Link, Text } from '@chakra-ui/react';
import { Browser, GithubLogo } from 'phosphor-react';

import { HomeSections } from '../constants/routes';
import HomePanelWrapper from '../molecules/HomePanelWrapper';
import { ScrollableSection } from '../molecules/ScrollableSection';

const PROJECTS = [
  {
    name: 'Saltong',
    github: 'https://github.com/carldegs/saltong',
    url: 'https://saltong.carldegs.com/',
    description:
      'A Wordle-like website which started as a personal project but ended up with 450,000 active users and was featured on news and entertainment outlets such as GMA News, Inquirer, Vice and Spot PH.',
  },
  {
    name: 'Heath Williams Real Estate Website',
    url: 'https://hw-website.vercel.app/', // TODO
    description: 'TODO!',
  },
  {
    name: 'Work for the Best',
    url: 'https://workforthebest.com/',
    description: 'TODO!',
  },
  {
    name: 'Street Bridge',
    github: 'https://github.com/carldegs/street-bridge',
    url: 'street-bridge.web.app',
    description:
      'A web-based realtime multiplayer card game based on a modified version of Bridge. The project was created using ReactJS and Firebase.',
  },
  {
    name: 'NextJS + Typescript Boilerplate',
    github: 'https://github.com/carldegs/nextjs-typescript-boilerplate',
    url: 'street-bridge.web.app',
    description:
      'A template for a web application that uses NextJS and Typescripts which also includes linting and styling rules, an integrated UI Framework (Chakra UI + Motion), a custom layout management, and a “plug-and-play” form handler based on react-hook-form.',
  },
  {
    name: 'Co-Director - ReactJS Philippines',
    url: 'https://reactjs.org.ph/',
    description:
      'Handles the events and social media channels of ReactJS Philippines, a non-profit organization of 7000+ Filipino developers and enthusiasts that are using the ReactJS framework.',
  },
];

const RATIO = 45;

const ProjectsPanel: React.FC = () => {
  return (
    <ScrollableSection hash={HomeSections.projects}>
      {/* <Heading>Projects and Affiliations</Heading> */}
      <HomePanelWrapper>
        {PROJECTS.map(({ name, github, url, description }, i) => (
          <Flex
            flexDir="column"
            key={name}
            mx={4}
            ml={i === 0 && '360px'}
            pr={i === PROJECTS.length - 1 && '32px'}
            scrollSnapAlign="end"
          >
            <Box
              w={`${16 * RATIO}px`}
              h={`${9 * RATIO}px`}
              bg="green.400"
              borderRadius={6}
              boxShadow="none"
              transform="scale(1)"
              _hover={{
                boxShadow: 'xl',
                transform: 'scale(1.05)',
              }}
              transition="box-shadow 0.2s ease-out, transform 0.5s cubic-bezier(.22,.68,0,1.71)"
            />
            <Flex justify="space-between" mt={6}>
              <Heading fontSize="2xl">{name}</Heading>
              <HStack spacing={4}>
                {github && (
                  <Link href={github} isExternal>
                    <GithubLogo size={24} />
                  </Link>
                )}
                {url && (
                  <Link href={url} isExternal>
                    <Browser size={24} />
                  </Link>
                )}
              </HStack>
            </Flex>
            <Text mt={8}>{description}</Text>
          </Flex>
        ))}
      </HomePanelWrapper>
    </ScrollableSection>
  );
};

export default ProjectsPanel;
