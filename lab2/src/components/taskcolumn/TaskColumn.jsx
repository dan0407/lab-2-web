import TaskCard from '../taskcard/TaskCard'

function TaskColumn({ title, tasks = [], status, onDeleteTask, onStatusChange }) {
  const filteredTasks = tasks.filter(task => task.status === status)
  
  return (
    <div className="task-column">
      <h2>{title}</h2>
      <div className="tasks-container">
        {filteredTasks.map((task) => (
          <TaskCard 
            key={task.id}
            id={task.id}
            name={task.name}
            description={task.description}
            status={task.status}
            priority={task.priority}
            onDelete={onDeleteTask}
            onStatusChange={onStatusChange}
          />
        ))}
      </div>
    </div>
  )
}

export default TaskColumn
