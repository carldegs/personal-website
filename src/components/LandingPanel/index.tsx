import { Flex, Box, Container } from '@chakra-ui/react';
import React, { useState } from 'react';

import Background from './Background';
import DynamicWeightText from './DynamicWeightText';

const LandingPanel: React.FC = () => {
  const [mouseEvent, setMouseEvent] = useState<any>();

  return (
    <Flex
      h="150vh"
      pos="relative"
      overflow="hidden"
      bg="gray.800"
      scrollSnapAlign="start"
      id="home"
    >
      <Background />
      <Box
        w="full"
        h="full"
        maxH="100vh"
        onMouseMove={(e) => setMouseEvent(e)}
        zIndex={2}
      >
        <Container
          as={Flex}
          w="full"
          h="full"
          align="flex-end"
          justify={{ base: 'flex-end', lg: 'center' }}
          maxW="container.xl"
          flexDir="column"
          pt={8}
          pb={{ base: 32, lg: 8 }}
          pr={{ base: 8, md: 16 }}
        >
          <DynamicWeightText
            text={[
              "I'm Carl de Guia,",
              'a Full-stack Engineer',
              'from the Philippines',
            ]}
            mouseEvent={mouseEvent}
          />
        </Container>
      </Box>
    </Flex>
  );
};

export default LandingPanel;
