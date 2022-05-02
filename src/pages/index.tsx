import { Flex, Stack, Wrap } from '@chakra-ui/layout';
import {
  IconButton,
  Image,
  Text,
  useClipboard,
  useToast,
} from '@chakra-ui/react';
import Head from 'next/head';
import { Copy, LinkedinLogo, TwitterLogo } from 'phosphor-react';
import { useEffect } from 'react';

// import Layout from '../layouts/Layout';

const ProjectCard: React.FC<{
  link: string;
  imgSrc: string;
  title: string;
}> = ({ link, imgSrc, title }) => {
  return (
    <Flex
      w="full"
      maxW="320px"
      mx={4}
      cursor="pointer"
      onClick={() => {
        window.open(link);
      }}
      flexDir="column"
      boxShadow="lg"
      borderRadius="lg"
      overflow="hidden"
      transform="scale(1)"
      _hover={{
        transform: 'scale(1.05)',
      }}
      transition="transform 0.3s ease"
    >
      <Image src={imgSrc} alt="saltong" />
      <Text
        px={4}
        py={2}
        textAlign="center"
        fontWeight="bold"
        letterSpacing="tight"
        fontSize="lg"
      >
        {title}
      </Text>
    </Flex>
  );
};

const Home: React.FC = () => {
  const { onCopy, hasCopied } = useClipboard('carl@carldegs.com');
  const toast = useToast();

  useEffect(() => {
    if (hasCopied) {
      toast({
        status: 'success',
        description: 'EMAIL COPIED!',
      });
    }
  }, [hasCopied, toast]);
  return (
    <Flex h="full" minH="100vh" justify="center" align="center" py={16}>
      <Head>
        <title>carldegs</title>
        <meta name="description" content="Carl de Guia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        h="full"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
      >
        <Image
          src="img/carldegs-logo.svg"
          alt="logo"
          w="full"
          px={8}
          maxW="500px"
        />
        <Text
          align="center"
          fontWeight="semibold"
          letterSpacing="tight"
          mt={2}
          fontSize={{ base: 'md', md: 'xl' }}
        >
          Hi there! My website is still under construction.
        </Text>

        <Text
          align="center"
          fontWeight="semibold"
          letterSpacing="tight"
          mt={8}
          fontSize={{ base: 'md', md: 'lg' }}
        >
          In the meantime, try visiting my other <i>fun</i> projects.
        </Text>

        <Stack
          mt={6}
          spacing={4}
          direction={{ base: 'column', md: 'row' }}
          align="center"
        >
          <ProjectCard
            link={'https://saltong.carldegs.com/'}
            imgSrc="img/saltong.jpg"
            title="SALTONG"
          />

          <ProjectCard
            link={'https://blindtest.carldegs.com/'}
            imgSrc="img/blind-test.jpg"
            title="THE BLIND TEST"
          />
        </Stack>

        <Text
          align="center"
          fontWeight="semibold"
          letterSpacing="tight"
          mt={8}
          fontSize={{ base: 'md', md: 'lg' }}
        >
          Or let&apos;s have a chat
        </Text>
        <Wrap spacing={4} mt={6}>
          <IconButton
            icon={<TwitterLogo weight="duotone" size={28} />}
            colorScheme="twitter"
            aria-label="Twitter"
            size="lg"
            onClick={() => {
              window.open('https://twitter.com/carldegs');
            }}
          />

          <IconButton
            icon={<LinkedinLogo weight="duotone" size={28} />}
            colorScheme="linkedin"
            aria-label="LinkedIn"
            size="lg"
            onClick={() => {
              window.open(
                'https://www.linkedin.com/in/carl-justin-de-guia-b40a1b97/'
              );
            }}
          />
        </Wrap>
        <Flex
          borderRadius="lg"
          bg="gray.200"
          align="center"
          justify="space-between"
          px={5}
          py={3}
          mt={5}
          cursor="pointer"
          onClick={onCopy}
        >
          <Text mr={6}>carl@carldegs.com</Text>
          <Copy weight="duotone" size={28} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
