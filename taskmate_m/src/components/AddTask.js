export const AddTask = ({tasklist, setTasklist,task,setTask}) =>  {
  const handleSubmit = (e) => { 
    e.preventDefault();

    if(task.id){
      const date = new Date();
      const updateTasklist = tasklist.map((toRender) => {
        return (toRender.id === task.id ? {
          id:task.id,
          name: e.target.task.value,
          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        }: 
        toRender)
      });
      setTasklist(updateTasklist)
    }else {
      const date = new Date();
      const newTask = {id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }
      setTasklist([...tasklist,newTask])
      e.target.task.value = "";
    }
  }
  return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" autoComplete="off" value = {task.name} placeholder="add task" onChange={e => setTask({...task,name:e.target.value})}/>
            <button type= "submit">Add</button>
        </form>
    </section>
  )
}
