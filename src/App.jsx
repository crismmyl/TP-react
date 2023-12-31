import { useState, useEffect } from "react"
import { TaskCreator } from "./componentes/TaskCreator"
import { TaskTable } from "./componentes/TaskTable"
import { VisibilityControl } from "./componentes/Visibilidad";

export default function TaskList () {
   
    const [taskItem, setTaskItem]= useState([]);
    const [showCompleted, setShowCompleted] = useState (false)

    function createNewTask (taskName) {
      if (!taskItem.find (task => task.name === taskName)) {
         setTaskItem([...taskItem, {name:taskName, done: false}])
        }
    }

    const toggleTask = task => {
      setTaskItem(
      taskItem.map((t) => (t.name === task.name ? {...t,done: !t.done}: t))
      );

    };

    useEffect(() =>{
        let data =localStorage.getItem('task')
        if (data) {
          setTaskItem(JSON.parse(data))
        }
    },[]);

    const cleanTask = ()=> {
      setTaskItem (taskItem.filter(task => !task.done))
      setShowCompleted (false)
    }

    useEffect(() => {
      localStorage.setItem('task', JSON.stringify(taskItem))
    },[taskItem]);

  return( 
    <div className="TaskList">
       <TaskCreator createNewTask = {createNewTask} />
       <TaskTable tasks = {taskItem} toggleTask ={toggleTask} />
       <VisibilityControl
          isChecked = {showCompleted}
          setShowCompleted = {(checked) =>setShowCompleted(checked)}
          cleanTask = {cleanTask}
       />
       {
        showCompleted === true &&(
          <TaskTable tasks = {taskItem} 
          toggleTask ={toggleTask}
          showCompleted = {showCompleted}
           />
        ) 
       }

    </div>
  )
}

