import { useState, useEffect } from "react"
import { TaskCreator } from "./componentes/TaskCreator"
import { TaskTable } from "./componentes/TaskTable"

export default function TaskList () {
   
    const [taskItem, setTaskItem]= useState([
          {
            name: 'tarea 1',
            done: true
          }
     ])

    function createNewTask (taskName) {
      if (!taskItem.find (task => task.name === taskName)) {
         setTaskItem([...taskItem, {name:taskName, done: false}])
        }
    }

    useEffect(() =>{
        let data =localStorage.getItem('task')
        if (data) {
          setTaskItem(JSON.parse(data))
        }
    },[])

    useEffect(() => {
      localStorage.setItem('task', JSON.stringify(taskItem))
    },[taskItem])

  return( 
    <div className="TaskList">
       <TaskCreator createNewTask = {createNewTask} />
       <TaskTable tasks = {taskItem}/>
       


          
       
        
    </div>
  )
}

