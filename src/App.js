import './index.css';
import Input from './components/input';
import TodoItem from './components/ToDoItem';
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice';

function App() {
  const todoList = useSelector(selectTodoList)

  return (
    <div className="App">
      <div className="app-container">
        <div className="app-todoContainer">
          {
            todoList.map(item => (
              <TodoItem
                name={item.item}
                done={item.done}
                id={item.id}
              />
            ))
          }
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
