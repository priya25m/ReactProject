import React from 'react'
import frame from "../assets/frame.png"
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import { FcGoogle } from 'react-icons/fc';
export default function Template({ title, head, description, image, formType, sign, setIsLoggedIn }) {
    return (
        <div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>
            <div className='max-w-[450px] w-11/12 mx-0'>
                <h1 className='text-richblack-5 font-semibold text-[1.875rem] '>{title}</h1>
                <p className='text-[1.125rem] leading-6'>
                    <span className='text-richblack-100'>{head}</span>
                    <br />
                    <span className='text-blue-100 italic'>{description}</span>
                </p>

                {formType === 'signup' ? (<SignUpForm setIsLoggedIn={setIsLoggedIn} />) : (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}

                <div className='flex w-full my-2 gap-x-2 items-center'>
                    <div className='h-[1px] w-full bg-richblack-700'></div>
                    <p className='text-richblack-700 font-medium text-[1.375rem]'>OR</p>
                    <div className='h-[1px] w-full bg-richblack-700'></div>
                </div>
                <button className='flex w-full justify-center items-center rounded-lg font-medium text-richblack-100 border border-richblack-700 px-3 py-2 gap-x-2 mt-3'><FcGoogle /> {sign} with Google</button>

            </div>
            <div className='relative w-11/12 max-w-[450px]'>
                <img src={frame} alt="" width={558} height={504} loading='lazy' />
                <img src={image} className='absolute -top-4 right-4' alt="" width={558} height={490} loading='lazy' />
            </div>
        </div>
    )
}
