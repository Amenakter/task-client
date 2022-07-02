import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const Task = (props) => {
    const [toDoRender, setToDoRender] = useState(false)
    const { task, _id } = props.task
    const refetch = props.refet
    const [view, SetView] = useState(true);
    const { register, handleSubmit, reset } = useForm();
    const editHandle = () => SetView(!view)
    const checkboxHandler = () => {
        const UpdateData = { 'status': true, 'id': _id, 'task': task }
        fetch('https://royal-backbacon-49141.herokuapp.com/task', {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(UpdateData)
        })
            .then(res => res.json())
            .then(ServerData => {
                setToDoRender(!toDoRender)
                toast.success("Congratulation!!")
                refetch()
            })
    }
    const onSubmit = data => {
        const UpdateData = { 'task': data.task, 'id': _id }
        fetch('https://royal-backbacon-49141.herokuapp.com/task', {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(UpdateData)
        })
            .then(res => res.json())
            .then(ServerData => {
                refetch()
                SetView(!view)
                toast.success("Task update Successful")
                reset()
            })
    }
    return (
        <div class="card w-80 bg-base-100 shadow-xl m-4 border">
            <div class="card-body">
                <div className='flex justify-end'>
                    <div class="cursor-pointer badge badge-secondary" onClick={() => editHandle()}>Edit</div>
                </div>
                <h2 class="card-title flex justify-between">
                    {view ? <div>
                        <div class="form-control">
                            <label class="cursor-pointer label">
                                <input onClick={() => checkboxHandler()} type="checkbox" class="checkbox checkbox-secondary mx-2" value={false} />
                                <span class="label-text text-xl">{task}</span>
                            </label>

                        </div>

                    </div>

                        :
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control">
                                <label class="input-group">
                                    <input size='20px' type="text" placeholder="Update Daily Task" class="input input-bordered" {...register("task")} />
                                </label>
                            </div>
                        </form>}
                </h2>
            </div>
        </div>
    );
};

export default Task;