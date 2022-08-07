import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

import { createLinearGradient, createRangeArr, mapCss } from '../../utils';
import MotionBox from '../Motion/MotionBox';
import { NUM_HEYS, heyVariants } from './constants';

const Background: React.FC = () => {
  return (
    <>
      <Box
        zIndex={1}
        pos="absolute"
        background={createLinearGradient('#4158D0', '#C850C0 35%')}
        h="full"
        w="full"
        mixBlendMode="multiply"
        left={0}
        right={0}
        top={0}
        bottom={0}
        m="auto"
      />
      <Flex
        pos="absolute"
        left="10%"
        flexDir="column"
        // maxH="calc(100vh + 50px)"
        zIndex={0}
        color="white"
        top="-50px"
        userSelect="none"
      >
        {createRangeArr(NUM_HEYS).map((i) => (
          <MotionBox
            custom={i}
            key={`hey-${i}`}
            my={{ base: '-34px', md: '-47px', lg: '-70px' }}
            ml={mapCss(
              {
                base: 10,
                md: 15,
                lg: 20,
              },
              (val) => `-${val * i}px`
            )}
            p={0}
            variants={heyVariants}
            initial="start"
            animate={['start', 'end']}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            transition={{
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Text
              fontSize={{ base: '8xl', md: '9xl', lg: '190px' }}
              fontFamily="Talampas, sans-serif"
              color={i === 1 && 'white'}
              opacity={1 - Math.log(i + 1) / Math.log(NUM_HEYS) + 0.3}
              sx={
                i !== 1 && {
                  WebkitTextStroke: { base: '1px white', lg: '2px white' },
                }
              }
            >
              HEY
            </Text>
          </MotionBox>
        ))}
      </Flex>
    </>
  );
};

export default Background;
