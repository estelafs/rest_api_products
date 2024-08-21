import { Flex } from '@chakra-ui/react';
import HomePage from './components/HomePage';

function App() {
  return (
    <Flex
      h='100vh'
      align='center'
      justify='center'
      fontSize='20px'
      fontFamily='poppins'
    >
      <HomePage />
    </Flex>
  );
};

export default App;
