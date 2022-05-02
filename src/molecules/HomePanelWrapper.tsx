import { Flex, Box, FlexProps } from '@chakra-ui/react';

const HomePanelWrapper: React.FC<FlexProps> = ({ children, ...flexProps }) => (
  <Flex w="full" h="full" overflow="hidden" align="center" pos="relative">
    <Box minW="360px" w="360px" />
    <Flex
      w="calc(100% + 360px)"
      h="90%"
      pb={12}
      pt={4}
      mt={12}
      ml="-360px"
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
