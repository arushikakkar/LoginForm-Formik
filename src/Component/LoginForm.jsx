import React from 'react';
import './LoginForm.css';
import { useFormik } from 'formik';
import {z} from 'zod';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm =() => {
  return (
    <div className='wrapper'>
      <h1>LoginForm</h1>
      <form className='login-form'>
        <div className='form-group'>
        <input type='email' id='email' name='email' placeholder='Enter your email' />
        <FaUser className='icon' />
        </div>
        <div className='form-group'>
        <input type='password' id='password' name='password' placeholder='Enter your password' />
        <FaLock className='icon' />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}
export default LoginForm;