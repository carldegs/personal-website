/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Box, BoxProps, Text } from '@chakra-ui/react';
import React from 'react';

import MotionBox from '../Motion/MotionBox';

interface Props {
  tags: string[];
  name: string;
  selected?: boolean;
}

const CardHeading: React.FC<Props> = ({ tags, name, selected }) => {
  const containerProps: BoxProps = selected
    ? {
        mt: 5,
        mx: 8,
        zIndex: 2,
        w: 'fit-content',
      }
    : {
        pos: 'absolute',
        bottom: 3,
        left: 3,
      };

  return (
    <Box {...containerProps}>
      <MotionBox
        layoutId={`${name}/tags`}
        //@ts-ignore
        transition={{
          layout: {
            type: 'spring',
            stiffness: 200,
            damping: 30,
          },
        }}
      >
        <Text color="whiteAlpha.700" fontSize="sm">
          {tags.join(' + ')}
        </Text>
      </MotionBox>
      <MotionBox
        layoutId={`${name}/title`}
        //@ts-ignore
        transition={{
          layout: {
            type: 'spring',
            stiffness: 200,
            damping: 30,
          },
        }}
      >
        <Text
          fontWeight={700}
          fontSize={selected ? '2xl' : 'xl'}
          color="whiteAlpha.900"
        >
          {name}
        </Text>
      </MotionBox>
    </Box>
  );
};

export default CardHeading;
