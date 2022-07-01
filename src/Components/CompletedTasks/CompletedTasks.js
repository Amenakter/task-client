import React from 'react';
import { useQuery } from 'react-query';
import CompleteTask from './CompleteTask';

const CompletedTasks = () => {
    const { isLoading, data } = useQuery('task', () =>
        fetch(`http://localhost:5000/task-complete`).then(res => res.json())
    )
    if (isLoading) {
        return <h1>loading..</h1>
    }
    console.log(data)
    return (
        <div>
            {data.map(item => <CompleteTask CompleteTaskData={item} />)}
        </div>
    );
};

export default CompletedTasks;