import React, { useState } from 'react';
import { MdEdit } from 'react-icons/md';
import { IoMdRemoveCircle } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa';
import '../css/Main.css';

function Main({ todo, removeItem, setTodo }) {
    const [iconShow, setIconShow] = useState(false);
    const [newTodo, setNewTodo] = useState('');
    const [editedTodoId, setEditedTodoId] = useState(null);

    const removeProduct = (id) => {
        removeItem(id);
    };

    const editFunc = (id, content) => {
        setEditedTodoId(id);
        setNewTodo(content);
        setIconShow(true);
    };

    const saveFunc = () => {
        if (editedTodoId !== null) {
            setTodo((prevTodos) => 
                prevTodos.map((item) =>
                    item.id === editedTodoId ? { ...item, content: newTodo } : item
                )
            );
            setNewTodo('');
            setEditedTodoId(null);
        }
        setIconShow(false);
    };

    return (
        <div className='mainContainer'>
            {todo.map((e) => (
                <div key={e.id} className='contentBox'>
                    <div>
                        {iconShow && editedTodoId === e.id ? (
                            <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} type="text" />
                        ) : (
                            <p>{e.content}</p>
                        )}
                    </div>

                    <div className='iconBox'>
                        <IoMdRemoveCircle onClick={() => removeProduct(e.id)} />
                        {iconShow && editedTodoId === e.id ? (
                            <FaCheck onClick={saveFunc} />
                        ) : (
                            <MdEdit onClick={() => editFunc(e.id, e.content)} />
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Main;