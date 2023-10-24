import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { TodoProvider } from "./context"
import { useState, useEffect } from "react"


function App() {

  const [todos, setTodos] = useState([]);

  //add function
  const addTodo = (currenTodo) => {
    setTodos((prevTodo) => [{id: Date.now(), ...currenTodo}, ...prevTodo] )
  }
  
  // delete
  const deleteTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter((singleTodo) => singleTodo.id !== id))
  }

  //complete
  const todoComplete = (id) =>{
    setTodos((prevTodo) => prevTodo.map((singleTodo) =>  singleTodo.id === id ? {...singleTodo, completed:!singleTodo.completed} : singleTodo ))
  }

  //update todo
  const updateTodo = (todo, id) => {
    setTodos((prevTodo) => prevTodo.map((singleTodo) => singleTodo.id === id ? todo : singleTodo))
  }


  
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])





  return (
    <TodoProvider value={{todos, addTodo, deleteTodo, todoComplete, updateTodo}}>
      <div className="flex h-screen">
          <div className="w-1/2 flex items-center justify-center">
              <TodoForm/>
          </div>
          <div className="w-1/2 flex items-center justify-center bg-slate-800">
              <div className="w-4/5 border border-solid border-slate-700 p-3 rounded bg-slate-700">
                {todos.map((todo)=>(
                    <div key={todo.id}>
                      <TodoList todo={todo} />
                    </div>
                ))}
              </div>
          </div>
      </div>
    </TodoProvider>
  )
}

export default App
