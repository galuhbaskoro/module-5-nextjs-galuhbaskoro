import React, { use, useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup";
import Swal from 'sweetalert2';
import Link from 'next/link';

function loginPage() {

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    if(auth) window.location.replace('/');
  },[]);
  
  const formik = useFormik<Login>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').min(5, 'Too Short!').required('Required'),
      password: Yup.string().min(5, 'Too Short!').required('Required'),
    }),
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values, {setSubmitting}) => {
    	setTimeout( () => {
      	handleSubmit(values);
      	setSubmitting(false);
    }, 400)}
  });

  const handleSubmit = (values: Login) => {
    const storedUser = localStorage.getItem('user');
    if(storedUser){
      const {email: storedEmail, password: storedPassword} = JSON.parse(storedUser);
      if(values.email === storedEmail && values.password === storedPassword){
        localStorage.setItem('auth', 'jsiwkkajduuhencjdh182938dsjdsk');
        Swal.fire({
          icon: 'success',
          title: 'Login Successfuly',
          position: 'center',
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true
        }).then(() => {
          window.location.replace('/');
        });
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Please check your credential data',
          position: 'center',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true
        }).then(() => {
          window.location.replace('/login');
        });
      } 
    };
  }

  return (
    <React.Fragment>
      <div className='flex flex-col w-full px-auto py-2'>

        <form
          className='mx-auto w-full md:w-2/5 p-10 bg-white border border-gray-200 rounded-lg shadow-md'
          onSubmit={formik.handleSubmit}
        >
          
          {/* Title */}
          <h1 className='mb-6 text-xl text-slate-600 text-center'>
            Login Form
          </h1>

          {/* Email */}
          <div className="mb-3">
            <label 
              htmlFor="email" 
              className="text-md font-medium text-gray-700">
              Email
            </label>
            <input 
              id="email" 
              name="email" 
              type="email"
              placeholder="your email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-700 text-md rounded-lg block 
              w-full p-2"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-sm text-red-500 mt-1">{formik.errors.email}</div>
            )}  
          </div>

          {/* Password */}
          <div className="mb-3">
            <label 
              htmlFor="password" 
              className="mb-2 text-md font-medium text-gray-700">
              Password
            </label>
            <input 
              id="password" 
              name="password" 
              type="password"
              placeholder="Your password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-700 text-md rounded-lg block 
              w-full p-2"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-sm text-red-500 mt-1">{formik.errors.password}</div>
            )}
          </div>

          {/* Button */}
          <div className='mt-5'>
            <button
              type="submit" 
              disabled={formik.isSubmitting}
              className="px-4 py-2 w-full text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 border border-transparent rounded-lg shadow-sm "
            >
              Login
            </button>
          </div>

           {/* Text */}
           <p className='text-sm text-blue-400 text-center mt-4'>
            Not yet have account, please <Link href='/register' className='hover:text-blue-700 hover:underline cursor-pointer'>Register Here</Link>
            </p>


        </form>
      </div>
    </React.Fragment>
  );
};

export default loginPage;