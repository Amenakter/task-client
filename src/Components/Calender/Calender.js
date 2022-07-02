import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = () => {
    return <div>
        <h1 className='text-5xl py-7'>Calender</h1>
        <div className='flex justify-center'><DayPicker /></div>
    </div>
};

export default Calender;