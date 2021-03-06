import React, {  useContext, useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap';
import FormTodo from './FormTodo'
import Todo from './Todo';
import './TodoList.css'
import { TodoContext } from './Context/TodoContext';

export default function TodoList({setTodos}) {
  // Load Context
  const {todos} = useContext(TodoContext);
  const [status, setStatus] = useState('all');
  const [filterTodo, setFilterTodo] = useState([]);

  useEffect(() => {
    const filterHandler = () => {
      switch(status){
        case 'completed':
          setFilterTodo(todos.filter(todo => todo.completed === true));
          break;
        case 'uncompleted':
          setFilterTodo(todos.filter(todo => todo.completed === false));
          break;
        default: 
        setFilterTodo(todos);
          break;
      }
    };
    filterHandler();
    console.log('hey');
  },[todos,status]);

    return (
        <div className="todolist">
            <FormTodo     
                setStatus={setStatus}
            />
            <ListGroup 
                variant="flush" 
                className="todo-list"                   
            >             
              {filterTodo.map(todo=>(
                  <Todo
                      key={todo.id}
                      text={todo.text}
                      todos={todos}
                      todo={todo}                      
                  />
                ))}
            </ListGroup>
        </div>
    )
}
