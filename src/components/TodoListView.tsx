import { Box, Button, Divider, HStack, Input, Stack, Text, VStack } from "@chakra-ui/react";
import { observer } from "mobx-react";
import { useState } from "react";
import { TodoList } from "../store/TodoStore";
import { Card } from "./Card";

type TodoProps = {
  todos: TodoList;
};
export const TodoListView = observer((props: TodoProps) => (

  <Stack>
    {props.todos.todoLsit.map(todo => (
      <Box textAlign={"center"} justifyItems={"center"} >
        <Card todo={todo}></Card>
        <Divider></Divider>
      </Box>
    ))}
  </Stack>
));


export const TodoCreator = (props: TodoProps) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <Box>
      <VStack>
        <Input type={"text"} placeholder="Name" onChange={(e) => { setName(e.target.value) }}></Input>
        <Input type={"text"} placeholder="Description" onChange={(e) => { setDescription(e.target.value) }}></Input>
      </VStack>
      <Divider></Divider>
      <Button variant={"solid"} _hover={{ bg: 'blue.200' }} onClick={() => {
        props.todos.addTodo({
          index: 0,
          name: name,
          description: description
        })
      }}>Save</Button>
    </Box>
  )
}

