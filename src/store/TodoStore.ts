import { makeAutoObservable } from "mobx";
import { Todo } from "../type/Todo";

export class TodoList {
  todoLsit: Todo[] = [];
  lastIndex: number = 0;
  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: Todo) {
    todo.index = this.lastIndex++;
    this.todoLsit.push(todo);
  }

  removeTodo(index: number) {
    this.todoLsit = this.todoLsit.filter((todo) => todo.index !== index);
  }

  markCompleted(index: number) {
    let todo = this.todoLsit.filter((item) => item.index === index)[0];
    if (todo) {
      todo.isCompleted = true;
    }
  }
}
