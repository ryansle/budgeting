// Components
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// Utilities
import { config } from '@/theme';

const theme = extendTheme({
  config,
});

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
