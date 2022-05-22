import { Flex, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Logo from '../../public/img/carldegs-logo.svg';
import { HOME_ROUTES } from '../constants/routes';
import { getHomeSectionData } from '../utils/routes';

const Sidebar: React.FC = () => {
  const router = useRouter();
  const [activeHash, setActiveHash] = useState<typeof HOME_ROUTES[0]>(
    {} as typeof HOME_ROUTES[0]
  );

  useEffect(() => {
    setActiveHash(getHomeSectionData(window.location.hash));
  }, []);

  useEffect(() => {
    const hashChangeStart = (url: string) => {
      setActiveHash(getHomeSectionData(url));
    };

    router.events.on('hashChangeStart', hashChangeStart);

    return () => {
      router.events.off('hashChangeStart', hashChangeStart);
    };
  }, [router.events]);

  return (
    <Flex
      pos="fixed"
      h={{ base: 'unset', md: '100vh' }}
      w={{ base: 'full', md: 'unset' }}
      flexDir="row"
      pl={{ base: 0, md: '50px' }}
      pr={{ base: 0, md: '20px' }}
      color={activeHash.isDark ? 'white' : '#292929'}
      transition="color 0.2s ease-out"
      transitionDelay={activeHash.isDark ? '0.4s' : '0.05s'}
      zIndex="420"
      justify={{ base: 'center', md: 'unset' }}
    >
      <Box
        h="full"
        w="1px"
        bg={activeHash.isDark ? 'white' : '#C4C4C4'}
        opacity="0.5"
        transition="background 0.2s ease-out"
        transitionDelay={activeHash.isDark ? '0.5s' : '0'}
        display={{ base: 'none', md: 'unset' }}
      />
      <Flex
        flexDir="column"
        pb={{ base: 6, md: '42px' }}
        pt={{ base: 0, md: '32px' }}
        justifyContent={{ base: 'center', md: 'space-between' }}
        alignItems={{ base: 'center', md: 'unset' }}
        w={{ base: 'full', md: 'unset' }}
      >
        <Link
          href={{
            pathname: '/',
          }}
          passHref
        >
          <Box
            mt={{ base: activeHash.hash ? 0 : '-45px', md: 'unset' }}
            ml={{ base: 'unset', md: activeHash.hash ? '12px' : '-12px' }}
            opacity={Number(!!activeHash.hash)}
            transition="opacity 0.2s ease-out, margin-left 0.3s cubic-bezier(.22,.68,0,1.71), margin-top 0.3s cubic-bezier(.22,.68,0,1.71)"
          >
            <Image
              src={Logo}
              height="70px"
              width="200px"
              alt="logo"
              layout="intrinsic"
            />
          </Box>
        </Link>

        <Flex w={{ base: 'full', md: 'unset' }} mt={{ base: -4, md: 0 }}>
          <Box
            h="32px"
            w="3px"
            bg={activeHash.isDark ? 'white' : '#292929'}
            ml="-2px"
            mr="10px"
            mt={`${
              32 * HOME_ROUTES.findIndex(({ hash }) => hash === activeHash.hash)
            }px`}
            zIndex={0}
            transition={`margin-top 0.2s cubic-bezier(.26,.83,.32,1), background 0.2s ease-out ${
              activeHash.isDark ? '0.4s' : '0.05s'
            }`}
            display={{ base: 'none', md: 'unset' }}
          />

          <Flex
            flexDir={{ base: 'row', md: 'column' }}
            w={{ base: 'full', md: 'unset' }}
          >
            {HOME_ROUTES.map((path) => (
              <Flex
                key={path.name}
                py={1}
                alignItems="center"
                h="32px"
                w={{ base: `${100 / HOME_ROUTES.length}%`, md: 'unset' }}
                textAlign={{ base: 'center', md: 'unset' }}
                justifyContent={{ base: 'center', md: 'unset' }}
              >
                <a
                  href={`/#${path.hash}`}
                  onClick={() => {
                    setActiveHash(path);
                  }}
                >
                  <Text
                    as="a"
                    fontWeight={activeHash.hash === path.hash && 'bold'}
                  >
                    {path.name}
                  </Text>
                </a>
              </Flex>
            ))}
          </Flex>
        </Flex>

        <Box
          h="1px"
          w="full"
          bg={activeHash.isDark ? 'white' : '#C4C4C4'}
          opacity="0.5"
          transition="background 0.2s ease-out"
          transitionDelay={activeHash.isDark ? '0.5s' : '0'}
          display={{ base: 'unset', md: 'none' }}
          mt={2}
        />
        <Box
          h="3px"
          w={`${100 / HOME_ROUTES.length}%`}
          bg={activeHash.isDark ? 'white' : '#292929'}
          ml={`${
            (100 / HOME_ROUTES.length) *
            HOME_ROUTES.findIndex(({ hash }) => hash === activeHash.hash)
          }%`}
          mt="-2px"
          // ml="-2px"
          // mr="10px"
          // mt={'4px'}
          zIndex={0}
          transition={`margin-left 0.2s cubic-bezier(.26,.83,.32,1), background 0.2s ease-out ${
            activeHash.isDark ? '0.4s' : '0.05s'
          }`}
          display={{ base: 'unset', md: 'none' }}
          alignSelf="start"
        />
      </Flex>
    </Flex>
  );
};

export default Sidebar;
