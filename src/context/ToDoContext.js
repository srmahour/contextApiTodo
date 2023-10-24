import { createContext, useContext } from "react";

//step one crete context
export const ToDoContext = createContext({
    todos:[
        {
            id:1,
            todo:'first todo item',
            completed:false
        }
    ],
    addTodo:(todo) =>{},
    updateTodo:(todo, id) =>{},
    deleteTodo:(id) =>{},
    todoComplete:(id) =>{}
})



//step two create provider
export const TodoProvider = ToDoContext.Provider

//setp three optional create useContext
export const useTodo = () => {
    return useContext(ToDoContext)
}
