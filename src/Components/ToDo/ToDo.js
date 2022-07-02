import { useQuery } from 'react-query';
import Task from './Task';

const ToDo = () => {
    const { isLoading, data, refetch } = useQuery('task', () =>
        fetch(`https://royal-backbacon-49141.herokuapp.com/task`).then(res => res.json())
    )
    if (isLoading) {
        return <h1>loading..</h1>
    }
    return (
        <div>
            <h1 className='text-5xl py-7'>To-Do Tasks List</h1>
            <div className='flex justify-center'>
                <div className='m-7 grid grid-cols-1 md:grid-cols-3'>
                    {data.map(item => <Task task={item} refet={refetch} />)}
                </div>
            </div>
        </div>

    );
};

export default ToDo;