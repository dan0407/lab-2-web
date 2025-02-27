
import './App.css'
import TaskColumn from './components/taskcolumn/TaskColumn'
import TaskCard from './components/taskcard/TaskCard'
function App() {
  const handleStatusChange = (newStatus) => {
    // Handle the status change here
    console.log('New status:', newStatus)
  }

  return (
    <div className="App">
      <header>
        <h1>Lab 2 Web</h1>
      </header>
      
      <main>
        <TaskCard 
          name="Task Name"
          description="Task Description"
          completed={false}
          onStatusChange={handleStatusChange}
        />
      </main>
    </div>
  )
}
export default App

const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const getTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
}
