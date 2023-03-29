import React, {useState} from 'react';
import useLocalStorage from '../hooks/useLocalStorage'

const CustomHookExample2 = () => {
    const [task, setTask] = useLocalStorage('task', '');
    const [tasks, setTasks] = useLocalStorage('tasks', []);

    const onSubmit = (e) => {
        e.preventDefault();
        const taskObj = {
            task,
            completedValue: false,
            date: new Date().toLocaleDateString()
        }

        setTasks([...tasks, taskObj]);
    }

  return (
    <>
    <form onSubmit={onSubmit} className="w-50">
        <div className="mb-3">
            <label className="form-label">Tasks</label>
            <input 
                type="text"     
                className="form-control" 
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
        </div>
        <button type='submit' className="btn btn-primary">Submit</button>
    </form>
    <hr />
    {tasks.map((x) => (
        <h3 key={x.date}>{x.task}</h3>
    ))}
    </>
  )
}

export default CustomHookExample2