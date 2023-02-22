// Components
import {
  Box,
  Flex,
  Heading,
  IconButton,
  useColorMode
} from '@chakra-ui/react';
import { SunIcon as Sun, MoonIcon as Moon } from '@chakra-ui/icons';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as='header'
      // todo: adjust padding
      px={['15px', '15px', '300px', '300px', '300px']}
      py='15px'
      borderBottomWidth='1px'
      mb={5}
    >
      <Flex justify='space-between'>
        <Heading>
          BUDGETING
        </Heading>

        <IconButton
          variant='outline'
          icon={colorMode === 'light' ? <Moon /> : <Sun />}
          onClick={toggleColorMode}
        />
      </Flex>
    </Box>
  );
};

export default Header;
