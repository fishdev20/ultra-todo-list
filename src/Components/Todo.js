import { faCheckSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useContext} from 'react'
import { Button } from 'react-bootstrap'
import './Todo.css';
import { TodoContext } from './Context/TodoContext';
import { COMPLETE_TODO, DELETE_TODO } from './reducers/Types';

export default function Todo({ todo,setTodos }) {

    // load context
    // const { deleteHandler } = useContext(TodoContext)
    const { dispatch } = useContext(TodoContext)

    // const { completeHandler } = useContext(TodoContext)

    return (           
            <li className={`todo ${todo.completed ? "completed" : ''}`}>
                <p>{todo.text}</p>
                <div className="icons">
                    <Button 
                        className="icon"
                        // onClick={() => {deleteHandler(todo.id)}}
                        onClick={()=> {
                            dispatch({
                                type: DELETE_TODO,
                                payload: {
                                    id: todo.id
                                }
                            })
                        }}
                    >
                        <FontAwesomeIcon  icon={faTrashAlt}/>
                    </Button>
                    <Button  
                        className="icon"
                        // onClick={() => {completeHandler(todo.id)}}
                        onClick={()=> {
                            dispatch({
                                type: COMPLETE_TODO,
                                payload: {
                                    id: todo.id
                                }
                            })
                        }}
                    >
                        <FontAwesomeIcon icon={faCheckSquare}/>
                    </Button>
                </div>
            </li>
        
    )
}
