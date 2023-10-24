import { useState } from "react"
import { useTodo } from "../context"

export default function TodoList({todo}){

    const [editable, setEditable] = useState(false);
    const [todoMessage, setTodoMessage] = useState(todo.todo)

    const {deleteTodo, todoComplete, updateTodo} = useTodo();

    const toggleCompleted = () =>{
        todoComplete(todo.id)
    }
    
    const editHandler = () => {
        updateTodo({...todo, todo:todoMessage}, todo.id)
        setEditable(false);
        
    }


    return(
            <div className={`flex justify-between items-center px-1 mb-2`}>
                <input type="checkbox" checked={todo.completed} onChange={toggleCompleted} />
                <input 
                    type="text" 
                    className={`ml-1 w-4/5 bg-transparent px-3 h-8 leading-8 focus-visible:outline-none ${editable ? 'border border-solid border-slate-600' : ''}  ${todo.completed ? 'line-through bg-green-700 border-green-700' : ''}`} 
                    readOnly={!editable} 
                    value={todoMessage}
                    onChange={(e) => setTodoMessage(e.target.value)}
                />
                <button 
                    type="button" 
                    className={`bg-slate-400 h-8 w-8 text-center rounded ml-1 ${todo.completed ? 'opacity-50' : ''}`} 
                    disabled={todo.completed}
                    onClick={() => {
                        if(todo.completed) return;
                        if(editable){
                            editHandler()
                        } else {
                            setEditable((prev) => !prev)
                        }
                    }}
                >{editable ? '💾' : '✏️'} </button>
                <button 
                    type="button"
                    onClick={() => deleteTodo(todo.id)} 
                    className={`bg-slate-400 h-8 w-8 text-center rounded ml-1`}
                >❌</button>
            </div>
    )
}