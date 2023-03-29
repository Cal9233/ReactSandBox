import React, {useState, useCallback} from 'react'

//UseCallBack returns a Memoized callback function
//use only for performance issues
const UseCallBackExample = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, 'Some Tasks']);
  }, [setTasks]); 

  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, i) => (
        <p key={i}>{task}</p>
      ))}
    </div>
  )
}

const Button = React.memo(({addTask}) => {
  console.log('Button rendered');

  return (
    <div>
      <button className="btn btn-primary" onClick={addTask}>Add Task</button>
    </div>
    )
})

export default UseCallBackExample