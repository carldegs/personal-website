import { Flex, FlexProps } from '@chakra-ui/react';

const HomePanelBox: React.FC<FlexProps> = ({ children, ...flexProps }) => (
  <Flex {...flexProps}>{children}</Flex>
);

export default HomePanelBox;
