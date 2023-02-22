// Components
import { Box } from '@chakra-ui/react';
import Header from '@/components/Navigation/Header'

const AppNavigation = ({ children }) => {
  return (
    <Box>
      <Header />
      {/* todo: adjust margins */}
      <Box mx={['15px', '15px', '300px', '300px', '300px']}>
        {children}
      </Box>
    </Box>
  );
};

export default AppNavigation;
