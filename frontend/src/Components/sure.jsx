

import React from 'react'
import {Link} from "react-router-dom";
import SignInAndRegisterLogo from "../images/SignInAndRegisterLogo.PNG"




const Sure = () => {
  return (
    <div>
<div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
   
  <div className="bg-white px-16 py-4 rounded-md text-center">
  <img src={SignInAndRegisterLogo} alt="" 
    className='h-20 '/>
    <h1 className="text-xl mb-4 font-bold text-slate-500 pt-8">Are You Sure?</h1>
    <Link to={"/register"}>
    <button className="bg-red-500 px-4 py-2 rounded-md text-md text-white">Yes</button> </Link>
    <Link to={"/emailCode"}>
    <button className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold">No</button></Link>
  </div>
</div>
    </div>
  )
}

export default Sure
