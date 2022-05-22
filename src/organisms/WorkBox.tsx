import {
  Box,
  BoxProps,
  Button,
  Center,
  Flex,
  forwardRef,
  Heading,
  Text,
} from '@chakra-ui/react';

const WorkBox: React.ForwardRefRenderFunction<
  any,
  {
    expanded?: boolean;
    name: string;
    startDate: string;
    endDate: string;
    role: string;
    onClick: () => void;
  } & BoxProps
> = (
  { expanded, name, startDate, endDate, role, onClick, ...boxProps },
  ref
) => {
  return (
    <Flex
      bg="green.300"
      w={{ base: '90%', md: 'calc(100% - 240px)', lg: 'calc(100% - 360px)' }}
      minW={{ base: '90%', md: 'calc(100% - 240px)', lg: 'calc(100% - 360px)' }}
      maxW="1080px"
      mx={{ base: 1, md: 3 }}
      px={{ base: 6, md: 8 }}
      py={6}
      boxShadow="xl"
      transition="max-width 1s cubic-bezier(.22,.68,0,1.71)"
      scrollSnapAlign="end"
      ref={ref}
      flexDir="column"
      alignSelf="center"
      h="calc(100% - 20px)"
      {...boxProps}
    >
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="center"
      >
        <Box>
          <Text
            fontSize="xl"
            fontWeight="black"
            textAlign={{ base: 'center', md: 'left' }}
          >
            {name}
          </Text>
          <Text
            textAlign={{ base: 'center', md: 'left' }}
          >{`${startDate} - ${endDate}`}</Text>
        </Box>

        <Text
          fontSize={{ base: 'md', md: 'xl' }}
          fontWeight="bold"
          mt={{ base: 2, md: 'unset' }}
          textAlign={{ base: 'center', md: 'right' }}
          maxW={{ base: 'unset', md: '250px', lg: 'unset' }}
        >
          {role}
        </Text>
      </Flex>
      <Center flexGrow={1}>
        <Heading>LOGO</Heading>
      </Center>
      <Flex justify="center">
        <Button px={8} onClick={onClick}>
          Details
        </Button>
      </Flex>
    </Flex>
  );
};

export default forwardRef(WorkBox);
