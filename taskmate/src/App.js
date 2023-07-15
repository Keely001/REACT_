import './App.css';
import {useState} from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {id:5271,name:"Record Lectures",completed:true}, 
    {id:7825,name:"Edit react",completed:false}, 
    {id:8391,name:"Watch Lectures",completed:false}
  ]);
  return (
    <div className ='App'>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => {
          return (<li key={task.id}> 
          {task.id} - {task.name}
          <button>DELETE</button>
          </li>)
        })}
      </ul>
    </div>
  );
}

export default App;
