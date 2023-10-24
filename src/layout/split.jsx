import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function Split({left, right}){
    return(
        <div className="flex h-screen">
            <div className="w-1/2 flex items-center justify-center">
                <TodoForm/>
            </div>
            <div className="w-1/2 flex items-center justify-center bg-slate-800">
                <TodoList/>
            </div>
        </div>
    )
}