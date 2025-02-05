import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get<Todo>(url).then(({ data }) => {
  const { id, title, completed } = data;
  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    Data with ID: ${id}
    Has title: ${title},
    And is it finished: ${completed}`);
}
