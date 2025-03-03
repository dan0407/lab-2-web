import './App.css'
import { useState, useEffect } from 'react'
import TaskForm from './components/taskform/TaskForm'
import TaskColumn from './components/taskcolumn/TaskColumn'

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now(), status: 'pending' }])
  }

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  const handleStatusChange = (taskId, newStatus) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ))
  }

  return (
    <div className="app">
      <TaskForm onAddTask={handleAddTask} />
      <div className="columns-container">
        <TaskColumn 
          title="Pendiente" 
          tasks={tasks} 
          status="pending"
          onDeleteTask={handleDeleteTask}
          onStatusChange={handleStatusChange}
        />
        <TaskColumn 
          title="En Progreso" 
          tasks={tasks} 
          status="in-progress"
          onDeleteTask={handleDeleteTask}
          onStatusChange={handleStatusChange}
        />
        <TaskColumn 
          title="Completadas" 
          tasks={tasks} 
          status="completed"
          onDeleteTask={handleDeleteTask}
          onStatusChange={handleStatusChange}
        />
      </div>
    </div>
  )
}

export default App