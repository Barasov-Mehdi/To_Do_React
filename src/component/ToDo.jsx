import React, { useState } from 'react';
import '../css/ToDo.css';

function ToDo({ createTodo }) {
    const [inpValue, setInpValue] = useState('');

    const addTodo = () => {
        if (!inpValue.trim()) return; 

        const newTodo = {
            id: Math.floor(Math.random() * 99999999),
            content: inpValue,
        };

        createTodo(newTodo);
        setInpValue(''); 
    };

    return (
        <div className='mainContainer'>
            <input
                type="text"
                placeholder="Yeni məlumat yaz..."
                value={inpValue}
                onChange={(e) => setInpValue(e.target.value)}
            />
            <button onClick={addTodo}>Əlavə et</button>
        </div>
    );
}

export default ToDo;