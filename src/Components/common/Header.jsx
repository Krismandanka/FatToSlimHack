
import React, { useState } from "react";

import { Link, matchPath } from 'react-router-dom'
import { useDispatch } from "react-redux"
import {  useNavigate } from "react-router-dom"

import { login } from "../../services/operations/authAPI"
import { logout } from "../../services/operations/authAPI";
import logo from "../../assets/Logo/logo-removebg.png"

const Header = () => {
  return (
    <>
      <header
    class="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg ">
    <div class="px-4">
        <div class="flex items-center justify-between">
            <div class="flex shrink-0">
                <a aria-current="page" class="flex items-center" href="/">
                    <img class="h-7 w-auto" src={logo} alt="" />
                    <p class="sr-only">Website Title</p>
                </a>
            </div>
            {/* <div class="hidden md:flex md:items-center md:justify-center md:gap-5">
                <a aria-current="page"
                    class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="#">How it works</a>
                <a class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="#">Pricing</a>
            </div> */}
            <div class="flex items-center justify-end gap-3">
                
                    <Link to='signup'>
                        <button className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex">
                            Sign In
                        </button>
                    </Link>

               

                    <Link to='/login'>
                        <button className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                            Login
                        </button>
                    </Link>
            </div>
        </div>
    </div>
</header>
    </>
    
  )
}

export default Header