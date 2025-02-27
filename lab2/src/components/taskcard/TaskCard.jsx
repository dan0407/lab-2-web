function TaskCard({ name, description, status, onStatusChange, onDelete }) {
  const statusOptions = ["Pending", "In Progress", "Completed"];

  return (
    <div className="task-card">
      <h3>{name}</h3>
      <p>{description}</p>
      
      <select 
        value={status} 
        onChange={(e) => onStatusChange(e.target.value)}
      >
        {statusOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default TaskCard

