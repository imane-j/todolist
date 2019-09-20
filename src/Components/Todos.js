import React from 'react';
import confetti from '../confetti.svg';

const Todos = ({ visualizeToDo, deleteToDo }) => {
    const todoList = visualizeToDo.length ? (visualizeToDo.map(item => {
           return (
                <div className="custom-control custom-checkbox" key={ item.id }>
                <input onClick={() => deleteToDo(item.id)} type="checkbox" className="custom-control-input" id="customCheck1" />
                <label onClick={() => deleteToDo(item.id)} className="custom-control-label" htmlFor="customCheck1">{ item.content }</label>
                </div>
           )
    }))
    :
    (
    <div className="congratulations">
        Vous avez terminé toutes vos taches! <strong>Congratulations!</strong>
        <img src={ confetti } alt="Célébration"/>
    </div>);

    return (
        <div>
            { todoList }
        </div>
    )
   
}
export default Todos;