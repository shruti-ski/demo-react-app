import React from "react";
import "./styles.css";
import SingleTodo  from "./SingleTodo";
import { Todo } from './model';


interface Props{
   todos : Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC <Props>= ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos?.map((todo) => (
      <SingleTodo 
      todo={todo} 
      todos={todos}
      key= {todo.id}  
      setTodos={setTodos}
      />  
      ))}
    </div>
  );
};

export default TodoList;
