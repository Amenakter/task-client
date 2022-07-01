import React from 'react';
import { useQuery } from 'react-query';
import Task from './Task';
import { ToastContainer } from 'react-toastify';

const ToDo = () => {
    const { isLoading, data, refetch } = useQuery('task', () =>
        fetch(`http://localhost:5000/task`).then(res => res.json())
    )
    if (isLoading) {
        return <h1>loading..</h1>
    }
    console.log(data)
    return (
        <div className='m-7'>
            {data.map(item => <Task task={item} refet={refetch} />)}
        </div>
    );
};

export default ToDo;