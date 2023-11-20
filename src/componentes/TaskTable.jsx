import { TaskRow } from "./TaskRow"

export const TaskTable = ({tasks, toggleTask, showCompleted = false}) => {

  const TaskTableRow = (doneValue) => {
    
    return (
      tasks
      .filter (task => task.done === doneValue)
      .map(task => (
        <TaskRow task = {task} key = {task.name} toggleTask= {toggleTask}/>

     ))

    )
  }
    return (
        <table>
            <thead>
              <tr>
                <th>Task</th>
              </tr>
            </thead>
            <tbody>
              {
                TaskTableRow(showCompleted) 
              }

            </tbody>
          </table>
    )
}