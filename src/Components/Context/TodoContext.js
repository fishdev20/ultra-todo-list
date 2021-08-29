import React, { createContext, useEffect, useReducer } from 'react'
import { TodoReducer } from '../reducers/TodoReducer';
import { GET_TODOS, SAVE_TODOS } from '../reducers/Types';

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
     const [todos, dispatch] = useReducer(TodoReducer, []);

    // const [todos, setTodos] = useState([]);
    // const addTodoHandler = todo => {
    //     setTodos([...todos,todo]);
    // };

    // const deleteHandler = id => {
    //     setTodos(todos.filter(todo => todo.id !== id));
        
    // };

    // const completeHandler = id => {
        
    //     setTodos(todos.map(todo => {
    //         if(todo.id === id) {
    //             return {
    //                 ...todo, 
    //                 completed: !todo.completed
    //             }  
    //         }
    //         return todo; 
    //     })) 
    //   };


    useEffect(() => {
        dispatch({
            type: GET_TODOS,
            payload: null
        })    
    }, []);
    useEffect(() => {
        dispatch({
            type: SAVE_TODOS,
            payload: {todos}
        })    
    }, [todos]);

    const todoContextData = {
        todos,
        dispatch
    };

    return (
        <TodoContext.Provider value={todoContextData}>
            {children}
        </TodoContext.Provider>
    )

}

export default TodoContextProvider;
