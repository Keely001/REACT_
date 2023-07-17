export const ShowTask = ({tasklist, setTasklist,task,setTask}) => {

    const handleEdit = (id) => {
        const  selectedTask = tasklist.find((toRender) => toRender.id ===id)
        setTask(selectedTask);
    }
    const handleDelete = (id) => {
        // const updatedTasklist = tasklist.filter(toRender => toRender.id !== id);
        // console.log(updatedTasklist);
    }

  return (
    <section className="showTask">
        <div className="head">
            <div>
                <span className="title">Todo</span>
                <span className="count">{tasklist.length}</span>
            </div> 
            <button className="clearAll" onClick={() => (setTasklist([]))}>Clear All</button>
        </div>
        <ul>
            {tasklist.map((toRender) => {
            return <li key={toRender.id}>
                <p>
                    <span>{toRender.name}</span>
                    <span>{toRender.time}</span>
                </p>
                <i onClick={handleEdit(toRender.id)} className="bi bi-pencil-square"></i>
                <i onClick={handleDelete(toRender.id)} className="bi bi-trash"></i>
            </li>
            })}
        </ul>

    </section>
  )
}
