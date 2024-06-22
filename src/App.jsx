import './App.css'
import AddTodo from './components/AddTodo/index'
import TodoList from './components/TodoList/index'

function App() {
  return (
    <div className="App">
      <div className="title">Todos With Undo</div>
      <AddTodo></AddTodo>
      <TodoList></TodoList>
    </div>
  )
}

export default App
