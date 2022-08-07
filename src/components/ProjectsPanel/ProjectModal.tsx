/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Box, useOutsideClick } from '@chakra-ui/react';
import React, { useRef } from 'react';

import MotionBox from '../Motion/MotionBox';
import CardHeading from './CardHeading';
import CardImage from './CardImage';

interface Props {
  name: string;
  img: string;
  tags: string[];
  text: string;
  onClick: () => void;
}

const ProjectModal: React.FC<Props> = ({ name, img, tags, text, onClick }) => {
  const modalRef = useRef();

  useOutsideClick({
    ref: modalRef,
    handler: onClick,
  });

  return (
    <>
      <Box
        pos="fixed"
        top={0}
        zIndex={10}
        w="full"
        h="full"
        bg="blackAlpha.600"
      />
      <MotionBox
        w="full"
        maxW="container.md"
        pos="fixed"
        mx="auto"
        zIndex={12}
        onClick={onClick}
        ref={modalRef}
        layoutId={`${name}/container`}
        top="90px"
        h="max-content"
        bg="gray.800"
        borderRadius="lg"
        //@ts-ignore
        transition={{
          layout: {
            type: 'spring',
            stiffness: 200,
            damping: 30,
          },
        }}
      >
        <CardImage src={img} name={name} selected />
        <CardHeading name={name} tags={tags} selected />
        <MotionBox
          layoutId={`${name}/content-container`}
          overflow="hidden"
          h="fit-content"
          w="full"
          //@ts-ignore
          transition={{
            layout: {
              type: 'spring',
              stiffness: 200,
              damping: 30,
            },
          }}
        >
          <MotionBox
            layoutId={`${name}/content`}
            w="full"
            h="fit-content"
            px={8}
            py={4}
            color="whiteAlpha.700"
            //@ts-ignore
            transition={{
              layout: {
                type: 'spring',
                stiffness: 200,
                damping: 30,
              },
            }}
          >
            {text}
          </MotionBox>
        </MotionBox>
      </MotionBox>
    </>
  );
};

export default ProjectModal;
