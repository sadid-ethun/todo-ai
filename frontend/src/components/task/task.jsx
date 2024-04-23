import React from "react";
import { useState } from "react";
import "./task.css";
import { MdDelete } from "react-icons/md";

function Task({ name, index, deletefxn }) {

    let [isChecked, setIsChecked] = useState(false)

    return (
        <div className="task">
            <input type="checkbox"
                checked={isChecked}
                onChange={
                    () => setIsChecked(!isChecked)
                }
            />
            <span
                style={{
                    textDecoration: isChecked ? 'line-through' : 'none'
                }}>
                {name}
            </span>
            <div className="delete" onClick={
                () => deletefxn(index)
            }>
                <MdDelete color='#fff' size='1.3em' />
            </div>
        </div>
    );
}

export default Task;


