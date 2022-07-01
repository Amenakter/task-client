import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


const Home = () => {
    const [values, setValues] = useState('');
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data = { 'task': data.task, 'status': false }
        fetch('http://localhost:5000/task', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(ServerData => {
                setValues(ServerData.task)
                toast.success("Task add Successful")
                reset()
            })
    };
    return (
        <div className='container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Enter Task</span>
                    </label>
                    <label class="input-group">
                        <input type="text" placeholder="Add Daily Task" class="input input-bordered" {...register("task")} />
                    </label>
                </div>
            </form>
        </div >
    );
};

export default Home;