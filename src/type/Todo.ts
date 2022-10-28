export interface Todo {
  index: number;
  name: string;
  description: string;
  priority?: number;
  date?: Date;
  isCompleted?: boolean;
}
