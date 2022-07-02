import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import ToDo from '../ToDo/ToDo';

const Home = () => {
    const [toDoRender, setToDoRender] = useState(false)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data = { 'task': data.task, 'status': false }
        fetch('https://royal-backbacon-49141.herokuapp.com/task', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(ServerData => {
                toast.success("Task add Successful")
                reset()
                setToDoRender(!toDoRender)
            })
    };
    return (
        <div>
            <div className='flex justify-center py-7'>
                <div>
                    <h1 className="text-5xl py-7">
                        Enter Your Daily Task!!
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Enter Task</span>
                            </label>
                            <label class="input-group">
                                <input type="text" placeholder="Add Daily Task" className="input input-bordered w-full" {...register("task")} />
                            </label>
                        </div>
                    </form>
                </div>
            </div>
            <ToDo />
        </div>
    );
};

export default Home;