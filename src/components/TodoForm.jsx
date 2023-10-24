import { useState } from "react";
import { useTodo } from "../context";



export default function TodoForm(){

    const [todo, setTodo] =  useState('');
    const {addTodo} = useTodo();

    const add = (e) =>{
        e.preventDefault();

        if(!todo) return;

        addTodo({todo, completed:false})
        setTodo('')
    }

   
    return(
        <form className=" w-4/5 border border-solid border-slate-800 flex rounded overflow-hidden" onSubmit={add}>
            <input 
                type="text" 
                placeholder="Type Todo Item" 
                className="w-full h-12 px-3 bg-transparent focus-visible:outline-none" 
                onChange={(e) => setTodo(e.target.value) }
                value={todo}
            />
            <button type="submit" className="h-12 bg-orange-500 w-24 border-0">Add</button>
        </form>

    )
}