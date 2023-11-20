export const TaskTable = ({tasks}) => {
    return (
        <table>
            <thead>
              <tr>
                <th>Task</th>
              </tr>
            </thead>
            <tbody>
              {
                  tasks.map(task => (
                    <tr key = {task.name}>
                      <td>
                      {task.name}
                      <input type="checkbox"
                             checked ={task.done}
                             onChange={() => alert('cambiando valor')}
                       />
                      </td>
                    </tr>

                 ))
              }

            </tbody>
          </table>
    )
}