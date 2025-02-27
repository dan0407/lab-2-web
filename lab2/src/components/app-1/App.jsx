import React, { useState, useEffect } from 'react';
import TaskForm from '../taskform/TaskForm';
import TaskColumn from '../taskcolumn/TaskColumn';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const changeStatus = (taskId, newStatus) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? {...task, status: newStatus} : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="task-manager">
      <TaskForm onAddTask={addTask} />
      <div className="columns">
        <TaskColumn
          title="Pendiente"
          tasks={tasks.filter(task => task.status === 'pending')}
          onStatusChange={changeStatus}
          onDelete={deleteTask}
        />
        <TaskColumn
          title="En Progreso"
          tasks={tasks.filter(task => task.status === 'in-progress')}
          onStatusChange={changeStatus}
          onDelete={deleteTask}
        />
        <TaskColumn
          title="Completadas"
          tasks={tasks.filter(task => task.status === 'completed')}
          onStatusChange={changeStatus}
          onDelete={deleteTask}
        />
      </div>
    </div>
  );
};

export default App;
