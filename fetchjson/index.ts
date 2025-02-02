import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const result = response.data as Todo;
  const ID = result.id;
  const title = result.title;
  const completed = result.completed;

  logTodo(ID, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    Data with ID: ${id}
    Has title: ${title},
    And is it finished: ${completed}`);
}
