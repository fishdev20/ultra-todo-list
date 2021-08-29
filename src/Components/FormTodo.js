import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import './FormTodo.css'
import { TodoContext } from './Context/TodoContext';
import { ADD_TODO } from './reducers/Types';


export default function FormTodo({setStatus}) {
    const [inputText, setInputText] = useState('');
    
     

        const inputTextHandler = e => {  
            setInputText(e.target.value);  
        };
     
       
        const handleSubmit = e => {
            e.preventDefault();
            dispatch({
                type: ADD_TODO,
                payload: {
                    todo: {
                        text: inputText,
                        completed: false,
                        id: Math.random()* 1000
                    }
                }
            })
            setInputText("");
        }
        
        const { dispatch } = useContext(TodoContext)
        

        const statusHandler = (e) => {
            setStatus(e.target.value);
            console.log('status');
        }
        
    return (
        <Form className="form mt-20">
            <Row className="row">
                <Col className="  col-sm-8 col-md-8 col-lg-8">
                    <div className="flex" onSubmit={handleSubmit}>
                        <Form.Control 
                            className="input-group"
                            type="text"
                            name='text'
                            onChange={inputTextHandler}
                            value={inputText}
                            placeholder='Enter new todo'
                        />
                        <Button 
                            className="btn" 
                            type="submit"
                            value='add'
                            onClick={handleSubmit}
                        >
                            <FontAwesomeIcon icon={faPlus}/>
                        </Button>
                    </div>
                </Col>
                <Col className="col-sm-4 col-md-4 col-lg-4">
                    <Form.Select className="filter-todo" onChange={statusHandler}> 
                        <option value="All">All</option>
                        <option value="completed">completed</option>
                        <option value="uncompleted">uncompleted</option>
                    </Form.Select>
                </Col>
                        
            </Row>
        </Form>
    )
}
