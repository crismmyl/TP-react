import {useState} from 'react'

export const TaskCreator = ({createNewTask}) => {
    
    const [taskElement,setTaskElement]= useState ('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createNewTask (taskElement);
        setTaskElement("");
    }

    return(
        <form onSubmit={handleSubmit} >
        <input type="text"
              placeholder="Ingrese tarea"
              value={taskElement}
              onChange={(e)=> setTaskElement(e.target.value)}/>
       
        <button>Save task</button>
     </form>
    )
}

