import React from 'react';
import classes from "./Tasks.module.css";
import {TaskType} from "./../../App";


type Props = {
    tasks: TaskType[]
    todolistId: string
    deleteTask: (taskId: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, todolistId: string, status: boolean) => void
}

export const Tasks = (props: Props) => {

    const deleteTaskHandler = (taskId: string, todolistId: string) => {
        props.deleteTask(taskId, todolistId)
    }
    const changeTaskStatusHandler = (taskId: string, todolistId: string, status: boolean) => {
        props.changeTaskStatus(taskId, todolistId, status)
    }

    return (
        <div className={classes.todolistTasks}>

            {props.tasks.map((task) => {
                return (<div className={classes.todolistTaskField}>
                    <input type="checkbox" checked={task.isDone}
                           onClick={() => changeTaskStatusHandler(task.id, props.todolistId, !task.isDone)}/>
                    <h3>{task.title}</h3>
                    <button className={classes.deleteTaskButton}
                            onClick={() => deleteTaskHandler(task.id, props.todolistId)}>X
                    </button>
                </div>)
            })}
        </div>
    );
};

export default Tasks;