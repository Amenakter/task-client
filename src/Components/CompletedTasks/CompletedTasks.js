import React from 'react';
import { useQuery } from 'react-query';
import CompleteTask from './CompleteTask';

const CompletedTasks = () => {
    const { isLoading, data } = useQuery('task', () =>
        fetch(`https://royal-backbacon-49141.herokuapp.com/task-complete`).then(res => res.json())
    )
    if (isLoading) {
        return <h1>loading..</h1>
    }
    return (<div>
        <h1 className='text-5xl py-7'>Completed Tasks</h1>
        <div className='flex justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                {data.map(item => <CompleteTask CompleteTaskData={item} />)}
            </div>
        </div>
    </div>
    );
};

export default CompletedTasks;