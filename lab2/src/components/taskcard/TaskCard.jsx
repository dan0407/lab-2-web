import './TaskCard.css';

function TaskCard({ id, name, description, status, priority, onDelete, onStatusChange }) {
  return (
    <div className={`task-card ${status}`}>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="task-footer">
        <select 
          value={status}
          onChange={(e) => onStatusChange(id, e.target.value)}
        >
          <option value="pending">Pendiente</option>
          <option value="in-progress">En Progreso</option>
          <option value="completed">Completada</option>
        </select>
        <span className="priority-tag">{priority}</span>
        <button 
          className="delete-btn" 
          onClick={() => onDelete(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default TaskCard
