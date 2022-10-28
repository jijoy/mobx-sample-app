import './App.css';
import { Box, Center, Container, Flex, Spacer, Stack } from '@chakra-ui/react';
import { CounterActionBtn, CounterView } from './components/CounterView';
import { Counter } from './store/CountStore';
import { TodoCreator, TodoListView } from './components/TodoListView';
import { TodoList } from './store/TodoStore';

function App() {
  const counterStore = new Counter();
  const todoStore = new TodoList();
  return (
    <Container w={"100vw"} h="100vh" >
      {/* <Flex alignItems='center' justifyItems={"center"}>
        <Box textAlign={"center"} >
          <Stack >
            <CounterView counter={counterStore}></CounterView>
            <CounterActionBtn counter={counterStore}></CounterActionBtn>
          </Stack>
        </Box>
      </Flex> */}
      <Flex flexDirection={"row"} flex={2} mt={20} >

        <TodoCreator todos={todoStore}></TodoCreator>

        <Spacer />
        <TodoListView todos={todoStore}></TodoListView>
      </Flex>
    </Container >
  );
}

export default App;
