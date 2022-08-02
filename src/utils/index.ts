import { ResponsiveObject } from '@chakra-ui/react';

export const createRangeArr = (num: number) =>
  [...new Array(num)].map((_, i) => i);

export const mapCss = <T = any>(
  breakpoints: ResponsiveObject<T>,
  callback: (value: T) => any
) =>
  Object.fromEntries(
    Object.entries(breakpoints).map(([key, value]) => [key, callback(value)])
  );
