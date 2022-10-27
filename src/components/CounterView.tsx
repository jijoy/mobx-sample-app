import { Button, Text, VStack } from "@chakra-ui/react";
import { observer } from "mobx-react";
import { Counter } from "../store/CountStore";

type AppPros = {
    counter: Counter
}

export const CounterView = observer((props: AppPros) => (
    <Text>{props.counter.value}</Text>
))

export const CounterActionBtn = observer((props: AppPros) => (
    <VStack >
        <Button onClick={() => props.counter.increment()} size={"lg"} w="300px">Increment</Button>
        <Button onClick={() => props.counter.decrement()} size={"lg"} w="300px">Decrement</Button>
    </VStack>
))

