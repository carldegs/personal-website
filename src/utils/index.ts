import { ColorProps, ResponsiveObject } from '@chakra-ui/react';

export const createRangeArr = (num: number) =>
  [...new Array(num)].map((_, i) => i);

export const mapCss = <T = any>(
  breakpoints: ResponsiveObject<T>,
  callback: (value: T) => any
) =>
  Object.fromEntries(
    Object.entries(breakpoints).map(([key, value]) => [key, callback(value)])
  );

export const getChakraColorCss = (color: ColorProps['color']) => {
  return `var(--chakra-colors-${(color as string).replace('.', '-')})`;
};

export const createLinearGradient = (...colors) =>
  `linear-gradient(180deg, ${colors.join(', ')})`;
