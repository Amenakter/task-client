import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navLink = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/CompletedTasks'>Completed Tasks</Link></li>
        <li><Link to='/ToDo'>To-Do</Link></li>
        <li> <Link to='/Calender'>Calculator</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className='container mx-auto flex justify-between'>
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        Task Manager
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navLink}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;