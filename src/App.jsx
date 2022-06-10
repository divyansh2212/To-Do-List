import React, { useState } from "react";
import Lists from "./Lists";

const App = () => {

    const [task, setTask] = useState("");
    const [taskList, updateTaskList] = useState([]);

    // onChange Function
    const func = (event) => {
        setTask(event.target.value);
    }

    // onClick function
    const updateTasks = () => {
        // updateTaskList([...taskList, task])
        updateTaskList((oldList) => {
            return [...oldList, task]
        })
        setTask("")
    }

    const deleteTask = (id) => {
        updateTaskList((oldList) => {
            return oldList.filter((arr, index) => {
                return index !== id
            })
        })
    }

    return (<>
        <div className="main_container">
            <div className="container">
                <h1>ToDo List</h1>

                <div>
                    <input placeholder="Add a new task" onChange={func} value={task}></input>
                    <button className="addItem" onClick={updateTasks}> + </button>
                </div>

                <ol>
                    {taskList.map((val, index) => {
                        return <Lists value={val}
                            key={index}
                            id={index}
                            onSelect={deleteTask}
                        />
                    })}
                </ol>

            </div>
        </div>
    </>)
}

export default App;