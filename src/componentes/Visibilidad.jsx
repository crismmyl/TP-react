export const VisibilityControl = ({isChecked, setShowCompleted, cleanTask}) => {
    const handleDelete = () => {
        if (window.confirm ('Quieres eliminarlo?')) {
            cleanTask()
        }
    }

   return (
    <div>
       <input type="checkbox"
             checked = {isChecked} 
            onChange={(e) => setShowCompleted (e. target. checked)}
       /> {""}
       <label>Mostrar tareas hechas</label>
       <button onClick={handleDelete}>
          Delete
       </button>

    </div>
   ) 
}