import TodoList from './components/TodoItemList';
import ToDoItem from './components/TodoItem';
import InputBox from './components/InputBox';
import Clock from './components/Clock';
import Quotes from './components/Quotes';

function App() {
  return (
    <div>
      <TodoList />
      <ToDoItem />
      <InputBox />
      <Clock />
      <Quotes />
    </div>
  );
}

export default App;
