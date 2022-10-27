import './App.css';
import { Box, Container, Flex, Stack } from '@chakra-ui/react';
import { CounterActionBtn, CounterView } from './components/CounterView';
import { Counter } from './store/CountStore';

function App() {
  const counterStore = new Counter();
  return (
    <Container w={"100vw"} h="100vh" centerContent>
      <Flex alignItems='center' justifyItems={"center"}>
        <Box textAlign={"center"} >
          <Stack >
            <CounterView counter={counterStore}></CounterView>
            <CounterActionBtn counter={counterStore}></CounterActionBtn>
          </Stack>
        </Box>
      </Flex>
    </Container >
  );
}

export default App;
