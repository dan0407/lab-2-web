import { useState } from 'react'
import './TaskForm.css'

function TaskForm({ onAddTask }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('pending')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTask = {
      name,
      description,
      priority,
      completed: false
    }
    onAddTask(newTask)
    setName('')
    setDescription('')
    setPriority('pending')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre de la tarea"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="urgent">Urgente</option>
        <option value="pending">Pendiente</option>
        <option value="not-urgent">No Urgente</option>
      </select>
      <button type="submit">Agregar Tarea</button>
    </form>
  )
}

export default TaskForm