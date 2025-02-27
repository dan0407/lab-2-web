import TaskCard from '../taskcard/TaskCard'

function TaskColumn({ title, tasks = [] }) {
  return (
    <div className="task-column">
      <h2>{title}</h2>
      <div className="tasks-container">
        {tasks.map((task) => (
          <TaskCard 
            key={task.id}
            name={task.name}
            description={task.description}
            completed={task.completed}
          />
        ))}
      </div>
    </div>
  )
}

export default TaskColumn