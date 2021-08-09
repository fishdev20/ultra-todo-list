import React from 'react';
import TodoList from './Components/TodoList';
import './App.css';
import TodoContextProvider from './Components/Context/TodoContext';



export default function App() {

 
 

  
  // useEffect (() => {
  //   const getLocal = () => {
  //     if(localStorage.getItem('todos') === null) {
  //       localStorage.setItem('todos', JSON.stringify([]));
  //     }
  //     else {
  //       let todoLocal = JSON.parse(localStorage.getItem('todos'));
  //       setTodos(todoLocal);
  //     }
  //   };
  //   getLocal();
       
  // }, []);

  
  // useEffect(() => {
  //   const filterHandler = () => {
  //     switch(status){
  //       case 'completed':
  //         setFilterTodo(todos.filter(todo => todo.completed === true));
  //         break;
  //       case 'uncompleted':
  //         setFilterTodo(todos.filter(todo => todo.completed === false));
  //         break;
  //       default: 
  //       setFilterTodo(todos);
  //         break;
  //     }
  //   };
  //   const saveLocal = () => {
  //       localStorage.setItem('todos', JSON.stringify(todos));
  //   };
    
  //   filterHandler();
  //   saveLocal();
  //   console.log('hey');
  // },[todos,status]);


    //   useEffect(() => {
    //     console.log('hello')
    //     const todos = localStorage.getItem('todos')
    //     if(todos) setTodos(JSON.parse(todos))
        
    // }, []);

    // useEffect(() => {
    //     const filterHandler = () => {
    //   switch(status){
    //     case 'completed':
    //       setFilterTodo(todos.filter(todo => todo.completed === true));
    //       break;
    //     case 'uncompleted':
    //       setFilterTodo(todos.filter(todo => todo.completed === false));
    //       break;
    //     default: 
    //     setFilterTodo(todos);
    //       break;
    //   }
    // };
    //     console.log('HEllo'); 
    //     filterHandler();
    //     localStorage.setItem('todos', JSON.stringify(todos))  
    // }, [todos,status]);
  
  
  return (
    <div className="App">
      <div className="container fluid">
          <h1>List your plan here!</h1>
          <TodoContextProvider>
            <TodoList 
            
            />
          </TodoContextProvider>
          
      </div>
    
    </div>
        
  )
}

