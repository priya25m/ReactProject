import React, { useEffect } from 'react'
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast';

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
    
    return (
        <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
            <Link to="/">
                <img src={logo} alt="" width="160" height="32" loading='lazy' />
            </Link>
            <nav>
                <ul className='flex gap-x-6 text-white/90'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>   
                    <li>
                        <Link to="/">Contact Us </Link>
                    </li>
                </ul>
            </nav>
            <div className='flex gap-x-4 items-center'>
                {
                    !isLoggedIn && (
                        <Link to="/login">
                            <button className='bg-richblack-800 text-white/90 px-[12px] py-[8px] border border-richblack-700 rounded-md'>LogIn</button>
                        </Link>
                    )}
                {
                    !isLoggedIn && (
                        <Link to="/signup">
                            <button className='bg-richblack-800 text-white/90 px-[12px] py-[8px] border border-richblack-700 rounded-md'>SignUp</button>
                        </Link>
                    )}
                {
                    isLoggedIn && (
                        <Link to="/logout" onClick={() => {
                            setIsLoggedIn(false);
                            toast.success('Logged out successfully');
                        }}>
                            <button className='bg-richblack-800 text-white/90 px-[12px] py-[8px] border border-richblack-700 rounded-md'>LogOut</button>
                        </Link>
                    )}
                {
                    isLoggedIn && (
                        <Link to="/dashboard" onClick={() => {
                            setIsLoggedIn(false);
                            toast.success('Logged out successfully');
                        }}>
                            <button className='bg-richblack-800 text-white/90 px-[12px] py-[8px] border border-richblack-700 rounded-md'>Dashboard</button>
                        </Link>
                    )
                }

            </div>
            
        </div>
    )
}
