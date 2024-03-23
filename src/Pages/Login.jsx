import React from 'react'
import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import { login } from "../services/operations/authAPI"
import { setProgress } from "../slices/loadingBarSlice"


const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)

  const { email, password } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
    console.log("emsil",email);
    console.log("password",password)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }
  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>
    
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" onSubmit={handleOnSubmit}>
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
              <input required
          type="text"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter email address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
    
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div class="text-sm">
                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div>
            </div>
            <div class="mt-2">
              <input required
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="Enter Password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>
    
          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>
    
        <p class="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
        </p>
      </div>
    </div>


  )
}

export default Login


// import { useState } from "react"
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
// import { useDispatch } from "react-redux"
// import { Link, useNavigate } from "react-router-dom"

// import { login } from "../services/operations/authAPI"
// import { setProgress } from "../slices/loadingBarSlice"

// function LoginForm() {
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   })

//   const [showPassword, setShowPassword] = useState(false)

//   const { email, password } = formData

//   const handleOnChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   const handleOnSubmit = (e) => {
//     console.log("its me")
//     e.preventDefault()
//     dispatch(login(email, password, navigate))
//   }

//   return (
//     <form
//       onSubmit={handleOnSubmit}
//       className="mt-6 flex w-full flex-col gap-y-4"
//     >
//       <label className="w-full">
//         <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//           Email Address <sup className="text-pink-200">*</sup>
//         </p>
//         <input
//           required
//           type="text"
//           name="email"
//           value={email}
//           onChange={handleOnChange}
//           placeholder="Enter email address"
//           style={{
//             boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//           }}
//           className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
//         />
//       </label>
//       <label className="relative">
//         <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//           Password <sup className="text-pink-200">*</sup>
//         </p>
//         <input
//           required
//           type={showPassword ? "text" : "password"}
//           name="password"
//           value={password}
//           onChange={handleOnChange}
//           placeholder="Enter Password"
//           style={{
//             boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//           }}
//           className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
//         />
//         <span
//           onClick={() => setShowPassword((prev) => !prev)}
//           className="absolute right-3 top-[38px] z-[10] cursor-pointer"
//         >
//           {showPassword ? (
//             <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//           ) : (
//             <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//           )}
//         </span>
//         <Link to="/forgot-password">
//           <p className="mt-1 ml-auto max-w-max text-xs text-blue-100">
//             Forgot Password
//           </p>
//         </Link>
//       </label>
//       <button onClick={()=>{dispatch(setProgress(60))}}
//         type="submit"
        
//         className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
//       >
//         Sign In
//       </button>
//     </form>
//   )
// }

// export default LoginForm