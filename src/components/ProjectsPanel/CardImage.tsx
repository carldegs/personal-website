/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useDimensions } from '@chakra-ui/react';
import React, { useMemo, useRef } from 'react';

import MotionBox from '../Motion/MotionBox';

interface Props {
  src: string;
  name: string;
  selected?: boolean;
}

const getStyleCenter = (
  imageDim: ReturnType<typeof useDimensions>,
  containerDim: ReturnType<typeof useDimensions>
) => {
  if (!imageDim?.contentBox || !containerDim?.contentBox) {
    return { x: 0, y: 0 };
  }

  return {
    x: -(imageDim.contentBox.width - containerDim.contentBox.width) / 2,
    y: -(imageDim.contentBox.height - containerDim.contentBox.height) / 2,
  };
};

const CardImage: React.FC<Props> = ({ src, name, selected }) => {
  const containerRef = useRef();
  const imageRef = useRef();
  const containerDim = useDimensions(containerRef, true);
  const imageDim = useDimensions(imageRef, true);
  const transition = selected
    ? {
        layout: {
          type: 'spring',
          stiffness: 200,
          damping: 30,
        },
      }
    : {
        layout: {
          type: 'spring',
          stiffness: 300,
          damping: 35,
        },
      };

  const style = useMemo(
    () => getStyleCenter(imageDim, containerDim),
    [containerDim, imageDim]
  );

  return (
    <MotionBox
      layoutId={`${name}/image-container`}
      //@ts-ignore
      transition={transition}
      w={selected ? 'min(768px, full)' : 'full'}
      h={selected ? 'full' : '290px'}
      mx="auto"
      overflow="hidden"
      borderTopRadius="lg"
      borderBottomRadius={selected ? 'unset' : 'lg'}
      zIndex={selected ? 1 : 0}
      ref={containerRef}
    >
      <MotionBox
        layoutId={`${name}/image`}
        bg={selected ? 'transparent' : 'blackAlpha.400'}
        bgImg={`url(${src})`}
        bgSize="cover"
        bgBlendMode="multiply"
        w="max(100%, 768px)"
        h={`${(768 / 16) * 9}px`}
        borderTopRadius="lg"
        borderBottomRadius={selected ? 'unset' : 'lg'}
        //@ts-ignore
        transition={transition}
        ref={imageRef}
        style={!selected && style}
      />
    </MotionBox>
  );
};

export default CardImage;
