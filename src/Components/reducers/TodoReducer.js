import {
    ADD_TODO,
    DELETE_TODO,
    SAVE_TODOS,
    GET_TODOS,
    COMPLETE_TODO
} from './Types';



export const TodoReducer =  (state,action) => {
    const {type, payload} = action
    switch(type) {
        case GET_TODOS:
            console.log('hello')
            const todos = localStorage.getItem('todos')
            if(todos) state = JSON.parse(todos)
            return state;

        case SAVE_TODOS:
            console.log('HEllo');      
            localStorage.setItem('todos', JSON.stringify(todos))  
            return state;
            
        case ADD_TODO:
            return [...state,payload.todo]
            // setTodos([...todos,todo]);
            
        case DELETE_TODO:
            return state.filter(todo => todo.id !== payload.id);

        case COMPLETE_TODO:
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
             return state.map(todo => {
                if(todo.id === payload.id) {
                    return{
                        ...todo,
                        completed: !todo.completed
                    }
                   
                }
                return todo; 
            })
            
      
        default:
            return state;
    }
}
   