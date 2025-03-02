
import { useEffect, useState } from 'react';
import './App.css'
import Header from './component/Header'
import ToDo from './component/ToDo';
import Main from './component/Main';


function App() {

  const [todo, setTodo] = useState([]);

  const createTodo = (newTodo) => {
    setTodo([...todo, newTodo])
  }

  const removeItem = (removeId) => {
    setTodo(todo.filter((item) => item.id !== removeId))
  }

  return (
    <>
      <Header />
      <ToDo createTodo={createTodo} />
      <Main removeItem={removeItem} setTodo={setTodo} todo={todo} />
    </>
  )
}

export default App;
