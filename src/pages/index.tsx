import { Box, Text } from '@chakra-ui/layout';

import { HOME_ROUTES } from '../constants/routes';
import { ScrollableSection } from '../molecules/ScrollableSection';
import Sidebar from '../organisms/Sidebar';

const Home: React.FC = () => {
  return (
    <Box as="main">
      <Sidebar />
      {HOME_ROUTES.map((path) =>
        path?.Component ? (
          <path.Component key={path.name} />
        ) : (
          <ScrollableSection key={path.name} {...path}>
            <Text>{path.name}</Text>
          </ScrollableSection>
        )
      )}
    </Box>
  );
};

export default Home;
