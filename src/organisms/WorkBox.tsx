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
      h="full"
      bg="green.300"
      w="100%"
      minW="120px"
      maxW="1080px"
      mx={3}
      px={8}
      py={6}
      boxShadow="xl"
      transition="max-width 1s cubic-bezier(.22,.68,0,1.71)"
      onClick={onClick}
      scrollSnapAlign="end"
      ref={ref}
      flexDir="column"
      {...boxProps}
    >
      <Flex justify="space-between" align="center">
        <Box>
          <Text fontSize="xl" fontWeight="black">
            {name}
          </Text>
          <Text>{`${startDate} - ${endDate}`}</Text>
        </Box>

        <Text fontSize="xl" fontWeight="bold">
          {role}
        </Text>
      </Flex>
      <Center flexGrow={1}>
        <Heading>LOGO</Heading>
      </Center>
      <Flex justify="center">
        <Button px={8}>Details</Button>
      </Flex>
    </Flex>
  );
};

export default forwardRef(WorkBox);
