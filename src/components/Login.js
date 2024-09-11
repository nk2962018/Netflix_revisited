import React, { useState } from 'react'
import Header from './Header';
import background from '../Assests/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg'
const Login = () => {
    const [isSignInForm, setIsSignInForm] =useState(true)

    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <>
        <div className='absolute'>
            <Header/>
            <img  src={background} alt='background-img'/>
        </div>
        <div>
            <form className='relative p-12 bg-black w-1/3 mx-auto right-0 left-0 top-36 rounded-lg opacity-80'>
            <h1 className='text-3xl w-3/4 text-white font-bold'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
            {
                !isSignInForm && (
                <input type='text' placeholder='Full Name' className='p-2 my-4 w-full bg-gray-500 opacity-90'/>

                
            )}
                <input type='text' placeholder='Email address' className='p-2 my-4 w-full bg-gray-500 opacity-90'/><br/>
                <input type='password' placeholder='Enter pasword' className='p-2 my-4 w-full bg-gray-500 opacity-90'/><br/>
                <button className='p-2 my-6 text-white bg-red-700 w-full opccity-100'>{isSignInForm? 'Sign In' : 'Sign Up'}</button>

                <p className='text-white' onClick={toggleSignInForm}>{isSignInForm? 'New to Netflix ? SignUp Now' : 'Already Registered? Sing In Now'}</p>
            </form>
            

        </div>
    </>
  )
}

export default Login;