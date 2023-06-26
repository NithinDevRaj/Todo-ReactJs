import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import  EditTodoForm  from "./EditTodoForm";
uuidv4();
const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };
  const toggleComplete = (id) => {
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, completed: !todo.completed } : todo
    //   )
    // );
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editTodo = (id) => {
    setTodos(todos.map(todo=>todo.id===id?{...todo,isEditing:!todo.isEditing}:todo
    ))
  };
  const editTask=(value,id)=>{
  setTodos(todos.map((todo)=>{
  return  todo.id===id?{...todo,task:value,isEditing:!todo.isEditing}:todo
  }))
  }
  return (
    <div className="todo-wrapper">
      <h1>GetThings Done..!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        todo.isEditing?(<EditTodoForm task={todo} editTodo={editTask} key={index}/>):(    <Todo
            editTodo={editTodo}
            toggleComplete={toggleComplete}
            task={todo}
            key={index}
            deleteTodo={deleteTodo}
          />)
    
      ))}
    </div>
  );
};

export default TodoWrapper;
