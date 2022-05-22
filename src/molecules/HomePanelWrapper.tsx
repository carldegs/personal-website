import { Flex, Box, FlexProps } from '@chakra-ui/react';

const HomePanelWrapper: React.FC<FlexProps> = ({ children, ...flexProps }) => (
  <Flex w="full" h="full" overflow="hidden" align="center" pos="relative">
    <Box
      minW={{ base: '12px', md: '360px' }}
      w={{ base: '12px', md: '360px' }}
    />
    <Flex
      w="calc(100% + 360px)"
      h="90%"
      pb={12}
      pt={4}
      mt={{ base: 28, md: 12 }}
      ml={{ base: '-16px', md: '-360px' }}
      maxH="750px"
      overflow="auto"
      scrollSnapType="x mandatory"
      css={{
        '&::-webkit-scrollbar': {
          width: 0,
        },
      }}
      {...flexProps}
    >
      {children}
    </Flex>
  </Flex>
);

export default HomePanelWrapper;
