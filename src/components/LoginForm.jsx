import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginForm({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    function submitHandler(e) {
        e.preventDefault();
        setIsLoggedIn(true);
        toast.success('Login Successful');
        navigate('/dashboard');
    }
    return (
        <form action="" onSubmit={submitHandler} className='flex flex-col gap-y-4 mt-6 w-full '>
            <label htmlFor="" className='w-full'>
                <p className='text-richblack-100 text-[0.875rem] mb-1 leading-6'>Email address<sup className='text-pink-200'> *</sup></p>
                <input type="email" required value={formData.email}
                    placeholder='Enter Email Id'
                    onChange={changeHandler}
                    name='email'
                    className='w-full rounded-[0.5rem] text-richblack-5 p-3 bg-richblack-800'
                />
            </label>
            <label htmlFor="" className='w-full relative'>
                <p className='text-richblack-100 text-[0.875rem] mb-1 leading-6'>Password<sup className='text-pink-200' > *</sup></p>
                <input type={showPassword ? ("text") : ("password")} required value={formData.password}
                    placeholder='Enter Password'
                    onChange={changeHandler}
                    name='password'
                    className='w-full rounded-[0.5rem] text-richblack-5 p-3 bg-richblack-800'
                />
                <span className='absolute right-3 top-[38px]' onClick={() => {
                    setShowPassword(!showPassword);
                }}>
                    {showPassword ? (<AiOutlineEyeInvisible fontSize="24" fill='#AFB2BF'/>) : (<AiOutlineEye fontSize="24" fill='#AFB2BF'/>)}
                </span>
            </label>

            <Link to="#" className='text-xs place-self-end mt-1 text-blue-100'>Forgot Password </Link>
            <button className='w-full text-center py-3 px-8 rounded-lg font-medium bg-yellow-50 mt-6'>Sign In</button>
        </form>
    )
}
