import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function SignUpForm({ setIsLoggedIn }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',

    })
    const [accountType, setAccountType] = useState('student');
    const navigat = useNavigate();
    function changeHandler(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    function submitHandler(e) {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("Password and Confirm Password doesn't match");
            return
        }
        setIsLoggedIn(true);
        toast.success('Sign Up Successful');
        const accountData = {
            ...formData
        };
        const finalData = {
            ...accountData,
            accountType
        }

        console.log(accountData);
        console.log(finalData);
        navigat('/dashboard');
    }
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    return (
        <div>
            <div className='flex rounded-xl bg-richblack-700 w-fit py-0.5 px-0.5'><button onClick={() => setAccountType("student")} className={`text-white bg-richblack-800 py-2 px-5 rounded-full transition-all duration-200 ${accountType === "student" ? "bg-richblack-900 text-white" : "bg-transparent text-richblack-200"}`}>Student</button>
                <button onClick={() => setAccountType("instructor")} className={`text-white bg-richblack-800 py-2 px-5 rounded-full transition-all duration-200 ${accountType === "instructor" ? "bg-richblack-900 text-white" : "bg-transparent text-richblack-200"}`}>Instructor</button>
            </div>
            <form action="" onSubmit={submitHandler} className='flex flex-col gap-y-3'>
                <div className='flex gap-3'>
                    <label htmlFor="" className='w-full'>
                        <p className='text-richblack-100 text-[0.875rem] mb-1 leading-6'>First Name<sup className='text-pink-200'>*</sup></p>
                        <input type="text"
                            required
                            name='firstName'
                            onChange={changeHandler}
                            placeholder='Enter First Name'
                            value={formData.firstName}
                            className='w-full rounded-[0.5rem] text-richblack-5 p-3 bg-richblack-800'

                        />
                    </label>
                    <label htmlFor="" className='w-full'>
                        <p className='text-richblack-100 text-[0.875rem] mb-1 leading-6'>Last Name<sup className='text-pink-200'>*</sup></p>
                        <input type="text"
                            required
                            name='lastName'
                            onChange={changeHandler}
                            placeholder='Enter Last Name'
                            value={formData.lastName}
                            className='w-full rounded-[0.5rem] text-richblack-5 p-3 bg-richblack-800'

                        />
                    </label>
                </div>
                <label htmlFor="" className='w-full'>
                    <p className='text-richblack-100 text-[0.875rem] mb-1 leading-6'>Email address<sup className='text-pink-200'>*</sup></p>
                    <input type="email"
                        required
                        name='email'
                        onChange={changeHandler}
                        placeholder='Enter Email Id'
                        value={formData.email}
                        className='w-full rounded-[0.5rem] text-richblack-5 p-3 bg-richblack-800'

                    />
                </label>
                <div className='flex gap-3'>
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
                            {showPassword ? (<AiOutlineEyeInvisible fontSize="24" fill='#AFB2BF' />) : (<AiOutlineEye fontSize="24" fill='#AFB2BF' />)}
                        </span>
                    </label>
                    <label htmlFor="" className='w-full relative'>
                        <p className='text-richblack-100 text-[0.875rem] mb-1 leading-6'>Confirm Passwrod<sup className='text-pink-200'>*</sup></p>
                        <input type={showConfirmPassword ? ("text") : ("password")} required value={formData.confirmPassword}
                            placeholder='Enter Password'
                            onChange={changeHandler}
                            name='confirmPassword'
                            className='w-full rounded-[0.5rem] text-richblack-5 p-3 bg-richblack-800'
                        />
                        <span className='absolute right-3 top-[38px]' onClick={() => {
                            setShowConfirmPassword(!showConfirmPassword);
                        }}>
                            {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize="24" fill='#AFB2BF' />) : (<AiOutlineEye fontSize="24" fill='#AFB2BF' />)}
                        </span>
                    </label>
                </div>
                <button className='w-full text-center py-3 px-8 rounded-lg font-medium bg-yellow-50 mt-5'>Create Account</button>
            </form>
        </div>
    )
}
