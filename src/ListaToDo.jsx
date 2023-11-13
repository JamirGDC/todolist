import React, { useState, useEffect } from 'react';
import './listatodo.css';

const ListaToDo = () => {
  const [tarea, setTarea] = useState('');
  const [toDo, setToDo] = useState([]);



  const change = (event) => {
    setTarea(event.target.value);
  }
  const click = () => {
    setToDo([...toDo, tarea]);
  }

  const borrar = (indice) => {
    const nuevoToDo = toDo.filter((tarea, i) =>  i!== indice);
    setToDo(nuevoToDo);
  }


  return (
    <div className='container-todo'>
      <h2>Ingresa una Nueva Tarea</h2>
      <div className='input'><input type="text" className='input' placeholder="Ingresa Tarea" onChange={change} />
      <button className='btn-agregar' onClick={click}>Agregar</button></div>
      
      <div>
      <ul>
        {toDo.map((tarea, indice) => {
          return (
            <li key={indice}>{tarea}
            <button className='btn-borrar' onClick={() => borrar(indice)}><span>Borrar
</span></button>
            </li>
            
          )
        })}
      </ul>
    </div>
    </div>
    
  );
};

export default ListaToDo;
