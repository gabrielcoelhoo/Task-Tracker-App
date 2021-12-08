import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'doctors appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text: 'meeting at school',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id:3,
        text: 'Food shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
])


// Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter( (task) => task.id !== id))
}

// Toggle reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
    task.id === id ? {...task, reminder: !task.reminder } : task
    )
  )
}

  return (
    <div className="container">
      <Header/>
      <AddTask/>
      {
      tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>)
        : 
        ('No Tasks to show')
        }
    </div>
  );
}

//to pass string as a prop inside header need to be in ''
//to pass other types need to be within {}2

export default App;
