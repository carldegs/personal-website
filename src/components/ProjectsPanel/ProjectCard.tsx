/* eslint-disable @typescript-eslint/ban-ts-comment */
import { BoxProps } from '@chakra-ui/react';
import React from 'react';

import MotionBox from '../Motion/MotionBox';
import CardHeading from './CardHeading';
import CardImage from './CardImage';

interface Props extends BoxProps {
  name: string;
  img: string;
  tags: string[];
  text: string;
}

const ProjectCard: React.FC<Props> = ({ name, img, tags, text, onClick }) => (
  <MotionBox
    w="full"
    h="full"
    pos="relative"
    cursor="pointer"
    overflow="hidden"
    layoutId={`${name}/container`}
    onClick={onClick}
    borderRadius="md"
    bg="gray.800"
    //@ts-ignore
    transition={{
      layout: {
        type: 'spring',
        stiffness: 300,
        damping: 35,
      },
    }}
  >
    <CardImage src={img} name={name} />
    <CardHeading name={name} tags={tags} />
    <MotionBox
      layoutId={`${name}/content-container`}
      overflow="hidden"
      pos="absolute"
      h="0"
      w="full"
      //@ts-ignore
      transition={{
        layout: {
          type: 'spring',
          stiffness: 300,
          damping: 35,
        },
      }}
    >
      <MotionBox
        layoutId={`${name}/content`}
        w="container.md"
        h="fit-content"
        px={8}
        py={4}
        color="white"
        fontWeight={300}
        letterSpacing="wide"
        overflow="hidden"
        //@ts-ignore
        transition={{
          layout: {
            type: 'spring',
            stiffness: 300,
            damping: 35,
          },
        }}
      >
        {text}
      </MotionBox>
    </MotionBox>
  </MotionBox>
);

export default ProjectCard;
