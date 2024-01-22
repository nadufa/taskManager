import React, {useState} from 'react';
import classes from './AddItemForm.module.css'
import {v1} from "uuid";

type Props = {

}

export const AddItemForm = (Props: any) => {

    const [title, setTitle] = useState('')

    const [error, setError] = useState<string | null>(null)


    return (
        <div className={classes.AddItemForm}>
            <input
                type="text"
                value={title}
                onChange={(event) => {
                    setError(null)
                    setTitle(event.currentTarget.value)
                }}
                onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                        addTodolist(title, v1())
                    }
                }}
                placeholder={}
                onBlur={
                    () => {
                        setError(null)
                    }}
                className={classes.todolistAddInput + ' ' + (error ? classes.error : '')}
            />
            <button

            >

            </button>
        </div>
    );
};

export default AddItemForm;