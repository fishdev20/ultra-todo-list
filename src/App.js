import React from 'react';
import TodoList from './Components/TodoList';
import './App.css';
import TodoContextProvider from './Components/Context/TodoContext';



export default function App() {
  
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

